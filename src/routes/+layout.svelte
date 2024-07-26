<script>
    import "../styles/global.css";
</script>

<header id="header">
    <a href="/">
        <img src="/Logo.svg" alt="Liver Care Foundation">  
    </a>
    <nav>
        <ul class="nav-links">
            <li><a href="/"> Home </a></li>
            <li><a href="/"> Who We Are</a></li>
            <li><a href="/"> About Liver Cancer</a></li>
            <li><a href="/"> Get Involved</a></li>
            <li><a href="/"> News & Updates</a></li>
            <li><a href="/" class="contact-btn"> Contact Us</a></li>        
        </ul>
        
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
            <p>&copy;2024 Copyright Liver Care Foundation. All Rights Reserved </p>
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
        padding: 0% 40px;
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

    .footer-links{
        display: flex;
        justify-content: space-between;
        padding: 50px 90px;
        text-align: center;
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
        padding: 13px 40px;
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