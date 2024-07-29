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
            <li><a href="/about-us"> Who We Are</a></li>
            <li><a href="/liver-cancer"> About Liver Cancer</a></li>
            <li><a href="/get-involved"> Get Involved</a></li>
            <li><a href="/news"> News & Updates</a></li>
            <li><a href="/contact" class="contact-btn"> Contact Us</a></li>        
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <div class="footer-links">
        <div>
            <h3>
                Liver Care Foundation&copy;
            </h3>
        </div>
        <div>
            <a href="/">
                <img src="/Logo-2.svg" alt="Liver Care Foundation">
            </a>
        </div>
        <div>
            <p>
                Don't feel shy, reach out <br><br>
                <a href="/contact" class="contact-btn">Drop a message</a>
                <!-- Improving the lives  of individuals affected by liver cancer through research,
                education, advocacy, and support. -->
            </p>
        </div>
    </div>
    <div class="footer-end">
        <div>
            <p>&copy;2024 Copyright Liver Care Foundation. All Rights Reserved </p>
        </div>
        <div>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        width: 90%;
        padding: 10px 0px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
    }

    .footer-links h3 {
        padding-top: 40px;
    }

    .footer-links p{
        padding-top: 10px;
    }

    .footer-end{
        display: flex;
        justify-content: space-between;
        background-color: #9d0063;
        padding: 10px 40px;
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