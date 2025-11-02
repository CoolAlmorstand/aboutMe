<script>
  import { onMount } from "svelte"
  
  
  import drawingCloserImage from "$images/drawingCloser.jpeg"
  import downfall2004Image from "$images/downfall2004.jpeg"
  import silentVoiceImage from "$images/silentVoice.jpeg"
  import valerieImage from "$images/valerie.jpg"
  
  import monsterImage from "$images/monster.jpeg"
  import deathNoteImage from "$images/deathNote.jpeg"
  import gotImage from "$images/got.jpg"
  
  let qoutesElementsArray = []
  const qoutes = [
    { 
      title: 'Drawing Closer',
      explanation: "It carries a quiet warmth — that tender, almost fragile feeling of finding peace even when time feels limited.",
      image: drawingCloserImage
    },
    { 
      title: 'Valerie and Her Week of Wonders',
      explanation: "Its strange, dreamlike world feels deeply unsettling yet magnetic — the kind of uncanny haze that mirrors childhood nightmares where nothing made sense but everything mattered.",
      image: valerieImage
    },
    { 
      title: 'Downfall (2004)',
      explanation: "A gripping descent into madness and authority — it captures how conviction and fear can twist people beyond reason, turning history into tragedy.",
      image: downfall2004Image
    },
    { 
      title: 'A Silent Voice',
      explanation: "It strikes close to home — a story of regret, forgiveness, and the quiet hope that maybe we can all learn to understand each other instead of hiding behind guilt.",
      image: silentVoiceImage
    },
    { 
      title: 'Monster',
      explanation: "It questions what’s right whats wrong and whats the meaning of life and our existance when nothing really matters — it shows how ourlife are inhearantly meaningless but our enjoying the little pleasues of life in our meaningless existance is what makes life worth living",
      image: monsterImage
    },
    { 
      title: 'Death Note',
      explanation: "A reflection on how people justify their actions internally — no one sees themselves as truly evil, and every decision feels righteous from within.",
      image: deathNoteImage
    },
    { 
      title: 'Game of Thrones',
      explanation: "It’s raw and honest — no heroes, just people doing whatever they must to survive. It shows how cruel and selfish humans can be when power’s on the line.",
      image: gotImage
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
      <div bind:this={qoutesElementsArray[i]} class="rounded-lg flex-shrink-0 opacity-0 flex flex-col w-[250px] min-h-[260px] p-2 bg-[rgba(20,30,40,0.8)]">
        <img class="mb-1 w-full max-h-[160px] object-cover object-top" src={qoute.image} />
        <div class="w-full h-full flex flex-col justify-center items-center">
          <p class="text-sm font-medium" > {qoute.title}  </p>
          <p class="text-sm font-light" > {qoute.explanation}  </p>
        </div>
      </div>
    {/each}
  </div>
</main>