<!--
    this component is used to display a pin marker positioned on the
    current selection, if any
-->
<script>
    import { selection, zoom } from 'anymapper'
    import { Marker } from 'anymapper'
</script>

<style>
</style>

{#if $selection && $selection.position}
<g transform="translate({$selection.position.x} {$selection.position.y}) scale({1/$zoom})"> <!-- semantic zoom -->
    <Marker
        icon={$selection.icon}
        shape="pin"
        scale="1.25"
    />
</g>
{/if}