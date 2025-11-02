

<script lang="ts">
  import { onMount } from "svelte"

  //import songs
  const neathTheGroveIsAHeartAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/neath-the-grove-is-a-heart.mp3"
  const unsweetenedLemonadeAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/Unsweetened_Lemonade-Amelie_Farren.mp3"
  const starSpangledAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/StarSpangled%20Amelie%20Farren.mp3"
  const littleCaesarAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/LittleCaesar.mp3"
  const selfInflictedAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/Self-Inflicted_Achromatic%20English_Cover.mp3"
  const dohertyAudio = "https://amrqqtynpyffwyitqkpu.supabase.co/storage/v1/object/public/FilesServer/Unsweetened_Lemonade-Amelie_Farren.mp3"
  
  //import song covers
  import neathTheGroveIsAHeartCover from "$song-covers/neathTheGrove.jpeg"
  import unsweetenedLemonadeCover from "$song-covers/unsweetenedLemonade.png"
  import starSpangledCover from "$song-covers/amelieProfilePic.jpg"
  import littleCaesarCover from "$song-covers/littleCaesar.jpeg"
  import selfInflictedCover from "$song-covers/selfInflicted.jpg"
  import dohertyCover from "$song-covers/doherty.jpg"
  
  const songs = [
    {
      title: "Neath the Grove Is a Heart",
      artist: "Yaelorke",
      start: 95,
      audioLink: neathTheGroveIsAHeartAudio,
      cover: neathTheGroveIsAHeartCover
    },
    {
      title: "Unsweetened Lemonade",
      artist: "Amélie Farren",
      start: 99,
      audioLink: unsweetenedLemonadeAudio,
      cover: unsweetenedLemonadeCover
    },
    {
      title: "Star Spangled",
      artist: "Amélie Farren",
      start: 118,
      audioLink: starSpangledAudio,
      cover: starSpangledCover
    },
    {
      title: "Little Caesar",
      artist: "seb lowe",
      start: 45,
      audioLink: littleCaesarAudio,
      cover: littleCaesarCover
    },
    {
      title: "Self-Inflicted (Achromatic English Cover)",
      artist: "JubyPhonic",
      start: 118,
      audioLink: selfInflictedAudio,
      cover: selfInflictedCover
    },
    {
      title: "Doherty",
      artist: "I dont Know",
      start: 0,
      audioLink: dohertyAudio,
      cover: dohertyCover
    }
  ];
  
  let isPlaying = false
  let currentSong = songs[0]
  let currentSongIndex = 0
  function togglePlay(){
    isPlaying = !isPlaying
    if(isPlaying) {
      if(!currentSong.audio) {
        currentSong.audio = new Audio(currentSong.audioLink)
        currentSong.audio.addEventListener("ended", () => changeSong(1) )
      }
      //currentSong.audio.currentTime = currentSong.start
      currentSong.audio.play()
    }
    else {
      currentSong.audio.pause()
    }
  }
  
  function changeSong(offset) {
    if(currentSong.audio) {
      currentSong.audio.pause()
    }

    currentSongIndex = (( ( currentSongIndex + offset ) % songs.length ) + songs.length) % songs.length
    
    currentSong = songs[currentSongIndex]
    isPlaying = !isPlaying
    togglePlay()
    
  }
</script>


<main class="box-border pt-3 flex flex-col justify-start items-center w-screen h-75 mb-3">
  <div class="mb-7 gap-1 text-white flex flex-row items-center font-medium text-xl"> 
    <i class="mt-[2px] fa-solid fa-music"></i>
    <p> my favorate music </p>
  </div>
  <div class="flex flex-row items-center justify-center text-white gap-2 text-5xl">
    <i on:click={() => changeSong(-1) } class="fa-solid fa-caret-left"></i>
    <div class="flex flex-col jusstify-start items-center w-45 aspect-square">
      <div class="relative rounded-lg mb-2 border-2 border-white flex flex-col justify-center items-center w-40 aspect-square ">
        <img src={currentSong.cover} />
        {#if !isPlaying}
          <i on:click={togglePlay} class="absolute fa-solid fa-circle-play"></i>
        {:else}
          <i on:click={togglePlay} class="opacity-40 absolute fa-solid fa-circle-pause"></i>
        {/if}
      </div>
      <p class="truncate text-sm font-medium"> {currentSong.title} </p>
      <p class="truncate text-sm font-medium"> by: {currentSong.artist} </p>
    </div>
    <i on:click={() => changeSong(1) } class="fa-solid fa-caret-right"></i>
  </div>
</main>