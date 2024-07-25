<script>
    import "../styles/global.css";
</script>

<header>
    <a href="/">
        <img src="/Logo.svg" alt="">  
    </a>
    <nav class="navlinks">
        <a href="/"> Home </a>
        <a href="/"> Who We Are</a>
        <a href="/"> About Liver Cancer</a>
        <a href="/"> Get Involved</a>
        <a href="/"> News & Updates</a>
        <a href="/" class="contact-btn"> Contact Us</a>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>

</footer>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 0% 1.5%;
    }

    nav {
        margin-top: auto;
        margin-bottom: auto;
    }

    nav a{
        text-decoration: none;
        font-size: 1.2em;
        padding-right: 8px;
        font-weight: 500;
    }
</style>