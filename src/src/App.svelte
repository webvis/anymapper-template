<!--
	main app component
	------------------
	modify this file to create your application
-->
<script lang="ts">
	import { onMount } from 'svelte'
	
	import type { Entity } from 'anymapper'
	import { Anymap, View, Layer, FloorLayersCtrl, InlineSVG, InfoBox, InfoBoxHeader, OmniBox, ResultsBox } from 'anymapper'
	import { selected_id, selection } from 'anymapper'

	// this template makes use of Svelte Material UI (same one that's used by anymapper)
	import { Content } from '@smui/card'

	// let's use the fuse.js library for client-side full-text searching
	import type Fuse from 'fuse.js'

	// example data
	import { fetch_pois, index_pois } from './data'

	let pois: Map<string, Entity> = new Map() // empty Map
	let search_index: Fuse<Entity>
	let results: Array<Fuse.FuseResult<Entity>> = []
	
	// component examples
	import POI from './components/POI.svelte'
	import Placemark from './components/Placemark.svelte'
	import Results from './components/Results.svelte'

	let omnibox
	let results_box

	// update the selection whenever the selected ID changes
	// (also update it whenever the underlying data - pois - is changed)
	$: {
		$selection = pois.has($selected_id) ? pois.get($selected_id) : null
	}

	// update the search index whenever the data is changed
	$: {
		search_index = index_pois(pois)
	}

	// update results whenever the user issues a query
	function handleSearch(e) {
		results = search_index.search(e.detail.query)
	}

	// whenever a valid entity is selected...
	$: if($selection) {
		// ...clear search results
		results = []
	}

	// when the App is ready, fetch some data
	onMount(async function () {
		pois = await fetch_pois()
	})
</script>

<style>
	footer {
		position: fixed;
		right: 0;
		bottom: 0;
		font-size: 10px;
		padding: 2px;
	}
</style>

<Anymap>
	<View viewBox="0 0 800 800">
		<!-- these layers load and show SVG files as floors -->
		<Layer name="0" type="floor">
			<InlineSVG path='data/floor0.svg'/>
		</Layer>
		<Layer name="1" type="floor">
			<InlineSVG path='data/floor1.svg'/>
		</Layer>
		<Layer name="2" type="floor">
			<InlineSVG path='data/floor2.svg'/>
		</Layer>

		<!-- this layer displays the content of the $pois store using POI components -->
		<Layer name="pois">
			{#each Array.from(pois.values()) as poi}
				<POI entity={poi}/>
			{/each}
		</Layer>

		<!-- this shows a pin if there's a selection -->
		<Placemark/>
	</View>

	<OmniBox {results} on:search={handleSearch} bind:this={omnibox} on:cursorexit={ () => results_box.focus() }>
		<ResultsBox bind:this={results_box} on:cursorexit={ () => omnibox.focus() }>
			<Results {results}/> <!-- search results -->
		</ResultsBox>
	</OmniBox>

	<!-- this shows an info box if there's a selection -->
	<InfoBox>
		<!-- the contents of InfoBox can be freely customized -->
		<InfoBoxHeader title={$selection.title} subtitle={$selection.subtitle}/>
		<Content>
			{@html $selection.content}
		</Content>
	</InfoBox>

	<!-- this shows a control for changing the current floor -->
	<FloorLayersCtrl/>

	<footer>Powered by <a href="https://github.com/webvis/anymapper">anymapper</a>, by <a href="//hct.iit.cnr.it/">HCT Lab</a> @<a href="//www.iit.cnr.it/">CNR-IIT</a></footer>
</Anymap>
