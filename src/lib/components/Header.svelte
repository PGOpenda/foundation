<script>
    import { onMount } from 'svelte';
    
    let scrollY;
    let isScrolled = false;
  
    onMount(() => {
      const handleScroll = () => {
        scrollY = window.scrollY;
        isScrolled = scrollY > 0;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
</script>

<header id="header" class:scrolled={isScrolled}>
    <a href="/">
        <img src="/Logo.svg" alt="Liver Care Foundation">  
    </a>
    <nav>
        <ul class="nav-links">
            <li><a href="/"> Home </a></li>
            <li><a href="/about-us"> Who We Are</a></li>
            <li><a href="/liver-cancer"> About Liver Cancer</a></li>
            <li><a href="/get-involved"> Get Involved</a></li>
            <li><a href="/news"> News & Updates</a></li>
            <li><a href="/contact" class="contact-btn"> Contact Us</a></li>        
        </ul>
    </nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 115px;
        z-index: 1000;  
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        z-index: 1000;
        transition: all 0.3s ease;
    }

    nav {
        margin-top: auto;
        margin-bottom: auto;
    }

    .nav-links {
        display: flex; 
        list-style: none;       
    }

    .nav-links li{
        padding: 0px 15px;
    }

    nav a{
        font-size: 1em;
        font-weight: 500;
        color: #000;
        text-align: center;
    }

    nav a:hover {
        color: #ff347d;
        transition: 500ms;
        border-bottom: 1px solid #ff347d;
        
    }

    .contact-btn{
        background-color: #9d0063;
        border: 1px solid #9d0063;
        color: #fff;
        padding: 12px;
        border-radius: 25px;
    }

    .contact-btn:hover {
        background-color: #ff347d;
        border: 1px solid #ff347d;
        color: black;
        transition: 500ms;
    }

    header.scrolled {
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
</style>