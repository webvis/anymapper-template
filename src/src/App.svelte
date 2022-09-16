<script lang="ts">
	import { Anymap, View, Layer, FloorLayersCtrl, InlineSVG, InfoBox, InfoBoxHeader, OmniBox, ResultsBox } from 'anymapper'
	import { selected_id, selection, results } from 'anymapper'

	import { Content } from '@smui/card'

	import { pois, search } from './stores.js'

	import POI from './POI.svelte'
	import Placemark from './Placemark.svelte'
	import Results from './Results.svelte'

	let omnibox
	let results_box

	function updateSelection() {
		if($pois.has($selected_id))
			$selection = $pois.get($selected_id)
		else
			$selection = null
	}

	selected_id.subscribe(updateSelection)

	function handleSearch(e) {
		$results = search(e.detail.query)
	}
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
		<Layer name="0" type="floor">
			<InlineSVG path='data/floor0.svg'/>
		</Layer>
		<Layer name="1" type="floor">
			<InlineSVG path='data/floor1.svg'/>
		</Layer>
		<Layer name="2" type="floor">
			<InlineSVG path='data/floor2.svg'/>
		</Layer>

		<Layer name="pois">
			{#each Array.from($pois.values()) as poi}
				<POI data={poi}/>
			{/each}
		</Layer>

		<Placemark/>
	</View>

	<OmniBox on:search={handleSearch} bind:this={omnibox} on:cursorexit={ () => results_box.focus() }>
		<ResultsBox bind:this={results_box} on:cursorexit={ () => omnibox.focus() }>
			<Results/>
		</ResultsBox>
	</OmniBox>

	<InfoBox>
		<InfoBoxHeader title={$selection.title} subtitle={$selection.subtitle}/>
		<Content>
			{@html $selection.content}
		</Content>
	</InfoBox>

	<FloorLayersCtrl/>

	<footer>Powered by <a href="https://github.com/webvis/anymapper">anymapper</a>, by <a href="//hct.iit.cnr.it/">HCT Lab</a> @<a href="//www.iit.cnr.it/">CNR-IIT</a></footer>
</Anymap>
