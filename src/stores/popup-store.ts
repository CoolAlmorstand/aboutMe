import { writable } from "svelte/store";
import type { SvelteComponent } from "svelte";

/**
 * A writable Svelte store containing an array of active popup components.
 */
export const popupsArray = writable<SvelteComponent[]>([]);

/**
 * Adds a popup component to the global popup store.
 * 
 * @param {SvelteComponent} component - The popup component instance to add.
 * @returns {(c: SvelteComponent) => void} A callback function that removes a popup when called.
*/
export function addPopup(component: SvelteComponent): (c: SvelteComponent) => void {
  popupsArray.update(arr => [component, ...arr]);
  return (c: SvelteComponent) => removePopup(c);
}

/**
 * Removes a specific popup component from the popup store.
 * 
 * @param {SvelteComponent} component - The popup component instance to remove.
 */
export function removePopup(component: SvelteComponent) {
  popupsArray.update(arr => arr.filter(item => item !== component));
}