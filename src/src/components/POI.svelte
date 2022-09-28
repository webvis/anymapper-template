<!--
    this component is used to display a marker positioned on the
    given entity
-->
<script lang="ts">
    import { zoom, current_layer, get_entity_position_in_layer, is_point_in_zoom_range } from 'anymapper'
    import { select } from 'anymapper'
    import { Marker } from 'anymapper'
    import type { Entity, Point } from 'anymapper'

    export let entity: Entity

    let position: Point
    $: position = get_entity_position_in_layer(entity, $current_layer)
    let visible: boolean
    $: visible = position !== null && is_point_in_zoom_range(position, $zoom)
</script>

<style>
    .selectable {
        cursor: pointer;
    }
</style>

{#if visible}
<g class="selectable" transform="translate({position.x},{position.y}) scale({1/$zoom})"
    on:click={() => select(entity.id)}>
    <Marker
        icon={entity.icon}
        bg_color="steelblue"
        scale={1.25}
        shadow
    />
</g>
{/if}