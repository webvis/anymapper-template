<script>
    import { zoom, current_layer, is_position_in_layer, user_transform, is_position_in_lod } from 'anymapper'
    import { select } from 'anymapper'
    import { Marker } from 'anymapper'

    export let data

    $: visible = is_position_in_layer(data.position, $current_layer) && is_position_in_lod(data.position, $user_transform.k)
</script>

<style>
</style>

{#if visible}
<g class="selectable" transform="translate({data.position.x},{data.position.y}) scale({1/$zoom})"
    on:click={() => select(data.id)}>
    <Marker
        icon={data.icon}
        bg_color="steelblue"
        shadow
    />
</g>
{/if}