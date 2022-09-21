<!--
    this component is used to display a list of search results
-->
<script>
    import { select, results } from 'anymapper'
	import { Item, Text, Graphic } from '@smui/list'
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

{#each $results as r}
    <Item class="result-item" on:SMUI:action={() => select(r.item.id)}>
        <Graphic class="result-item-graphic material-symbols-outlined">{r.item.icon}</Graphic>
        <Text>{r.item.title} <span class="secondary">{r.item.subtitle}</span></Text>
    </Item>
{/each}