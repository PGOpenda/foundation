<script>
    import "../styles/global.css";
</script>

<header id="header">
    <a href="/">
        <img src="/Logo.svg" alt="Liver Care Foundation">  
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
    <div class="footer-links">
        <div>
            <a href="/">
                <img src="/Logo-2.svg" alt="Liver Care Foundation">
            </a>
            <h3>
                Liver Care Foundation
            </h3>
        </div>
        <div>
            <h2>
                Improving the lives  of individuals affected by liver cancer through research,
                education, advocacy, and support.
            </h2>
        </div>
    </div>
    <div class="footer-end">
        <div>
            <p>2024 Copyright Liver Care Foundation. All Rights Reserved </p>
        </div>
        <div>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
        </div>
    </div>
</footer>

<style>
    header {
        display: flex;
        justify-content: space-between;
        padding: 0% 2.5%;
        background-color: #fff7fa;
    }

    nav {
        margin-top: auto;
        margin-bottom: auto;
    }

    nav a{
        text-decoration: none;
        font-size: 1em;
        padding-right: 2em;
        font-weight: 500;
        color: #000;
        text-align: center;
    }

    nav a:hover {
        color: #ff347d;
        transition: 500ms;
        
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

    footer{
        background-color: #fff7fa;
    }
    
    .footer-links{
        display: flex;
        justify-content: space-between;
        padding: 50px;
        text-align: center;
    }

    .footer-links h3{
        font-weight: 400;
    }

    .footer-links h2{
        font-weight: 400;
    }

    .footer-links div{
        max-width: 400px;
    }

    .footer-end{
        display: flex;
        justify-content: space-between;
        background-color: #9d0063;
        padding: 15px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    }

    .footer-end a{
        color: #fff;
        text-decoration: none;
        padding-right: 20px;
    }
</style>