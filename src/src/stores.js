import { readable } from 'svelte/store'

export const pois = readable(new Map(), function start(set) {
    fetch('data/pois.json')
        .then(async function (response) {
            let data = await response.json()
            set( new Map(data.map(d => [d.id, {...d, position: {...d.position, layers: new Set(d.position.layers)}, type: 'poi'}] )) )
        })
})