// example store
// -------------
// a simple collection of points of interest (poi) read from a JSON file
// the collection is exposed as a Svelte store, and implemented with a JS Map (to support id-based lookup)
// the collection is also indexed with fuse.js in order to support full-text searching

import { readable, derived, get } from 'svelte/store'
import Fuse from 'fuse.js'

export const pois = readable(new Map(), function start(set) {
    fetch('data/pois.json')
        .then(async function (response) {
            let data = await response.json()
            set( new Map(data.map(d => [d.id, {...d, position: {...d.position, layers: new Set(d.position.layers)}, type: 'poi'}] )) )
        })
})

export const pois_index = derived(pois,
	($pois) => {
        const fuse = new Fuse(Array.from($pois.values()), {
            ignoreLocation: true,
            threshold: 0.3,
            keys: [
                "title",
                "subtitle",
                "content"
            ]
        })
        return fuse
    }
)

export function search(query) {
    return get(pois_index).search(query)
}