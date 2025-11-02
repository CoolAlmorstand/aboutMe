<script>
  import { onMount } from "svelte"
  
  
  import drawingCloserImage from "$images/drawingCloser.jpeg"
  let qoutesElementsArray = []
  const qoutes = [
    { 
      title: 'Drawing Closer',
      explanation: "why i  like it",
      image: drawingCloserImage
    }
  ]
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = qoutesElementsArray.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            entry.target.animate([
              { transform: 'translateY(100%)', opacity: 0 },
              { transform: 'translateX(0)', opacity: 1 }
            ], {
              duration: 1000,
              easing: 'ease-out',
              fill: "forwards"
            });
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px -15% -100px -15%' // triggers when element is 200px from bottom of viewport
      }
    )
    qoutesElementsArray.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  })
</script>

<main class="mb-30 text-lg text-white font-medium flex flex-col justify-start items-center w-screen">
  <div class="mb-2 flex flex-row text-white text-lg gap-1 ">
    <i class="mt-1 fa-solid fa-clapperboard"></i>
    <p class="font-semibold"> My Favorite Movies </p>
  </div>
  <div class="mb-5 flex flex-row text-white text-base gap-1 ">
    <i class="fa-solid fa-chevron-left"></i>
    <p class="-mt-1"> swipe </p>
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="relative gap-10 text-center box-border px-15 w-full flex flex-row overflow-x-auto justify-start items-start">
    {#each qoutes as qoute, i }
      <div bind:this={qoutesElementsArray[i]} class="rounded-lg flex-shrink-0 opacity-0 flex flex-col w-[250px] min-h-[250px] p-2 bg-[rgba(20,30,40,0.8)]">
        <img class="mb-1 w-full max-h-[160px] object-cover object-top" src={qoute.image} />
        <div class="w-full h-full flex flex-col justify-center items-center">
          <p class="text-sm font-medium" > {qoute.title}  </p>
          <p class="text-sm" > {qoute.explanation}  </p>
        </div>
      </div>
    {/each}
  </div>
</main>