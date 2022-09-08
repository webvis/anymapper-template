<script lang="ts">
	import { View, Layer, InfoBox, OmniBox, FloorLayersCtrl, ResultsBox, InlineSVG } from 'anymapper'
</script>

<style>
	/* FIXME? global defaults? */
	:global(html), :global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	.wrapper {
		height: 100%;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		position: absolute;
	}

	/* application-specific */
	
	/* define global CSS */
	:global(.infobox) {
		width: 350px;
	}
	:global(.omnibox) {
		width: 350px;
	}
	:global(.view) {
		background: #e3f4d7;
	}

	:global(.selectable) {
		cursor: pointer;
	}
	
	footer {
		position: fixed;
		right: 0;
		bottom: 0;
		font-size: 10px;
		background: rgba(255,255,255,0.6);
		padding: 2px;
	}
</style>

<div class="wrapper">

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
</View>

<FloorLayersCtrl/>

<OmniBox>
	<ResultsBox>
		Hi
	</ResultsBox>
</OmniBox>

<InfoBox>
	Hello
</InfoBox>

<footer>Powered by <a href="https://github.com/webvis/anymapper">anymapper</a>, by <a href="//hct.iit.cnr.it/">HCT Lab</a> @<a href="//www.iit.cnr.it/">CNR-IIT</a></footer>

</div>
