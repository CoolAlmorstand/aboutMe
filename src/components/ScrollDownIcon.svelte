

<script lang="ts">
</script>

<style>
	.bob {
		animation: bob 1.5s ease-in-out infinite;
	}

	@keyframes bob {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
</style>

<main class="mb-5 bob flex flex-col justify-start items-center text-white font-semibold text-lg">
  <p> scroll down </p>
  <i class="fa-solid fa-chevron-down"></i>
</main>


