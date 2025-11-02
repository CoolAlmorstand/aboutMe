

<script lang="ts">
  import { popupsArray, removePopup } from "$stores/popup-store"
  import { fade, fly } from 'svelte/transition';
</script>

<main class="pointer-events-none absolute w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
  {#each $popupsArray as popup, i }
    <div transition:fade={{duration: 150}} on:click={ () => removePopup(popup) } class="absolute pointer-events-auto w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.2)]">
      <svelte:component this={popup} />
    </div>
  {/each}
</main>