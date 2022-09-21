<!--
    this component is used to display a marker positioned on the
    given point of interest (as the data prop)
-->
<script>
    import { zoom, current_layer, is_position_in_layer, user_transform, is_position_in_lod } from 'anymapper'
    import { select } from 'anymapper'
    import { Marker } from 'anymapper'

    export let data

    // the POI is considered visible if it's on the current layer and the level of detail is adequate
    $: visible = is_position_in_layer(data.position, $current_layer) && is_position_in_lod(data.position, $user_transform.k)
</script>

<style>
    .selectable {
        cursor: pointer;
    }
</style>

{#if visible}
<g class="selectable" transform="translate({data.position.x},{data.position.y}) scale({1/$zoom})"
    on:click={() => select(data.id)}>
    <Marker
        icon={data.icon}
        bg_color="steelblue"
        scale="1.25"
        shadow
    />
</g>
{/if}