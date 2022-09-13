<script lang="ts">
	import { Anymap, View, Layer, FloorLayersCtrl, InlineSVG, InfoBox, InfoBoxHeader } from 'anymapper'
	import { selected_id, selection } from 'anymapper'
	import { pois } from './stores.js'

	import POI from './POI.svelte'

	function updateSelection() {
		if($pois.has($selected_id))
			$selection = $pois.get($selected_id)
		else
			$selection = null
	}

	selected_id.subscribe(updateSelection)
</script>

<style>
</style>

<Anymap>
	<View viewBox="0 0 800 800">
		<Layer name="T" type="floor">
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
	</View>

	<InfoBox>
		<InfoBoxHeader title={$selection.title} subtitle={$selection.subtitle}/>
	</InfoBox>

	<FloorLayersCtrl/>

	<footer>Powered by <a href="https://github.com/webvis/anymapper">anymapper</a>, by <a href="//hct.iit.cnr.it/">HCT Lab</a> @<a href="//www.iit.cnr.it/">CNR-IIT</a></footer>
</Anymap>
