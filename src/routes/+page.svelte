<script lang="ts">
  import { onMount } from "svelte"
  import MusicSection from "$components/MusicSection.svelte"
  import ScrollDownIcon from "$components/ScrollDownIcon.svelte"
  import QuotesSection from "$components/QuotesSection.svelte"
  import MoviesSection from "$components/MoviesSection.svelte"
</script>

<main class="box-border gap-5 pb-20 overflow-y-auto flex flex-col justify-start items-center w-screen h-screen pt-3 p-2 bg-gradient-to-b from-slate-700 to-sky-800">
  <div class="mb-5 w-full flex flex-col justify-start items-start">
    <p class="mb-3 font-['Anton',_system-ui] text-slate-200 text-5xl tracking-wide"> Hi I Am. </p>
    <p class="mb-5 font-['Anton'] text-slate-200 text-5xl tracking-wide "> Rico v Hansen </p>
    <p class="ml-1 font-serift text-slate-200 text-lg font-medium ">I Am a 17 year old kid driven by curiosity i would try to explain who i am here but they say a picture is worth a thousand words so just explore this (for education purposes etech subject)</p>
  </div>
  <MusicSection />
  <ScrollDownIcon />
  <QuotesSection />
  <MoviesSection />
</main>