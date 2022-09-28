<!--
	main app component
	------------------
	modify this file to create your application
-->
<script lang="ts">
	import type Fuse from 'fuse.js'
	
	import type { Entity } from 'anymapper'
	import { Anymap, View, Layer, FloorLayersCtrl, InlineSVG, InfoBox, InfoBoxHeader, OmniBox, ResultsBox } from 'anymapper'
	import { selected_id, selection } from 'anymapper'

	// this template makes use of Svelte Material UI (same one that's used by anymapper)
	import { Content } from '@smui/card'


	// store example
	import { pois, search } from './stores'

	// component examples
	import POI from './components/POI.svelte'
	import Placemark from './components/Placemark.svelte'
	import Results from './components/Results.svelte'

	let results: Array<Fuse.FuseResult<Entity>> = []

	let omnibox
	let results_box

	// what to do whenever there's a change of selected ID
	function updateSelection() {
		if($pois.has($selected_id))
			$selection = $pois.get($selected_id)
		else
			$selection = null
	}
	selected_id.subscribe(updateSelection)

	// what to do whenever the user issues a search
	function handleSearch(e) {
		results = search(e.detail.query)
	}

	// what to do when an entity is selected
	selection.subscribe(d => {
		// if there's a valid selection...
		if(d) {
			// ...clear search results
			results = []
		}
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
			{#each Array.from($pois.values()) as poi}
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
