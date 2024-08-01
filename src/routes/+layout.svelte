<script>
    import "../styles/global.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
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