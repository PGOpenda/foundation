<script>
	import '../styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding-top: 115px;
	}
</style>
