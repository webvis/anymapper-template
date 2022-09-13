<script>
    import { zoom, current_layer, is_position_in_layer, user_transform, is_position_in_lod } from 'anymapper'
    import { select, hover_enter, hover_leave } from 'anymapper'
    import { Marker } from 'anymapper'

    export let data

    $: visible = is_position_in_layer(data.position, $current_layer) && is_position_in_lod(data.position, $user_transform.k)
</script>

<style>
</style>

{#if visible}
<g class="selectable" transform="translate({data.position.x},{data.position.y}) scale({1/$zoom})"
    on:click={() => select(data.id)}
    on:mouseenter={() => hover_enter(data.id)}
    on:mouseleave={() => hover_leave(data.id)}>
    <Marker
        icon={data.icon}
        icon_spacing={data.icon_spacing}
        text={data.text}
        shape={data.shape}
        shadow
    />
</g>
{/if}