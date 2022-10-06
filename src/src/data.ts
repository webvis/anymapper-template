// example data
// -------------
// a simple collection of points of interest (poi) read from a JSON file
// the collection is exposed as a JS Map (to support id-based lookup)
// the collection is also indexed with fuse.js in order to support full-text searching

import { Entity } from 'anymapper'
import Fuse from 'fuse.js'

// read the list of pois from JSON, and return them as a Map of Entities
export async function fetch_pois(): Promise<Map<string, Entity>> {
    let response = await fetch('data/pois.json')
    let data = await response.json()
    let entities: Array<Entity> = data.map(d => new Entity(d))
    return new Map(entities.map(d => [d.id, d] ))
}

// index the given pois with fuse.js
export function index_pois(pois: Map<string, Entity>): Fuse<Entity> {
    const fuse: Fuse<Entity> = new Fuse(Array.from(pois.values()), {
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