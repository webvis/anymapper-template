<!--
    this component is used to display a list of search results
-->
<script lang="ts">
    import type Fuse from 'fuse.js'
	import type { Entity } from 'anymapper'

    import { select } from 'anymapper'
	import { Item, Text, Graphic } from '@smui/list'

    export let results: Array<Fuse.FuseResult<Entity>>
</script>

<style>
    :global(.result-item-graphic) {
        margin-right: 16px;
    }
    .secondary {
        margin-left: 4px;
        opacity: 0.6;
    }
</style>

{#each results as r}
    <Item class="result-item" on:SMUI:action={() => select(r.item.id)}>
        <Graphic class="result-item-graphic material-symbols-outlined">{r.item.icon}</Graphic>
        <Text>{r.item.title} <span class="secondary">{r.item.subtitle}</span></Text>
    </Item>
{/each}