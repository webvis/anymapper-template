<script lang="ts">
	import { Anymap, View, Layer, FloorLayersCtrl, InlineSVG } from 'anymapper'
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
	</View>

	<FloorLayersCtrl/>

	<footer>Powered by <a href="https://github.com/webvis/anymapper">anymapper</a>, by <a href="//hct.iit.cnr.it/">HCT Lab</a> @<a href="//www.iit.cnr.it/">CNR-IIT</a></footer>
</Anymap>
