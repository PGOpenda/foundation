<script>

    import FAQ from '$lib/FAQ.svelte';
    import hero_pic from '$lib/assets/hero-pic.jpg';
    import img_car_1 from '$lib/assets/img-car-1.jpg'
    import img_car_2 from '$lib/assets/img-car-2.jpg'
    import img_car_3 from '$lib/assets/img-car-3.jpg'
    import faqData from '$lib/data/faq-data.json'

</script>


<div class="hero">
    <div>
        <h1>
            Fighting Liver Cancer Together: Hope, Research, Support
        </h1>
        <a href="/liver-cancer"> Learn About Liver Cancer</a>
    </div>
    
    <img src="{hero_pic}" alt="old man with his daughter">

</div>

<div class="hero-2">
    <h1>
        <span>Welcome</span>
    </h1>

    <p>
        The Liver Care Foundation strives to provide 
        support, education, and resources to those affected by liver cancer and to fund research 
        for better treatments and ultimately a cure
    </p>
</div>

<div class="imgs">
    <img src="{img_car_1}" alt="a family taking a selfie together">
    <img src="{img_car_2}" alt="a patient getting instructinos from a nurse">
    <img src="{img_car_3}" alt="a father with his daughter smiling">
</div>

<!-- <div class="info">
    <h1>
        Resources and Information on Liver Cancer
    </h1>

    <p>
        Around 800,000 individuals worldwide receive a diagnosis of this illness every year. 
        With over 700,000 deaths from the disease each year, liver cancer is also one of the 
        main causes of cancer-related mortality globally. We’re here with answers, guidance, and support.
    </p>

    <div class="info-cards">
        <ul>
            <li><a href="/">Understading Liver Cancer </a></li>
            <li><a href="/">Managing Liver Cancer</a></li>
            <li><a href="/">FInd Support & Resources</a></li>
            <li><a href="/">Prevention Measures</a></li>
        </ul>
    </div>
</div> -->

<FAQ faqs = {faqData} />

<style>
    .hero {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 50px 100px;
    }

    .hero h1{
        font-weight: 300;
        font-size: 3.3em;
        padding-bottom: 25px;
    }

    .hero a{
        background-color: #9d0063;
        color: #fff;
        border: 1px solid #9d0063;
        color: #fff;
        padding: 12px;
        border-radius: 25px;
    }

    .hero a:hover{
        background-color: #ff347d;
        border: 1px solid #ff347d;
        color: black;
        transition: 500ms;
    }
    
    .hero img {
        height: 350px;
        border-radius: 120px 20px 120px 20px;
    }

    .hero-2{
        padding: 50px 100px;
        background-color: #fff;
        text-align: center;
    }

    .hero-2 h1, 
    .hero-2 p {
        display: inline-block;
        max-width: 600px; /* Adjust this value as needed */
        width: 100%;
        margin: 0 auto;
    }

    .hero-2 h1{
        font-size: 3em;
        margin-bottom: 10px;
    }

    .hero-2 span{
        color:#9d0063;
    }

    .imgs{
        display: flex;
        justify-content: center;
        padding: 50px 100px; 
        background-color: #fff;
        /* background: url(/background.svg); */
        background-size: cover;
    }

    .imgs img{
        height: 210px;
        padding: 0px 5px;
        border-radius: 120px 20px 120px 20px;
    }

    /* .info{
        padding: 50px 100px;
        /* text-align: center; */
        /* align-items: end; */
    /* } */ 

    /* .info h1{
        margin-bottom: 15px;
        font-size: 2.3em;
    }

    .info p{
        margin-bottom: 15px;   
    }

    .info-cards ul {
        display: flex;
        width: 100%;
        list-style: none;
    }

    .info-cards li {
        margin-right: 25px;
        border: 1px solid #9d0063;
        padding: 10px;
        background-color: #9d0063;
    }

    .info-cards li a{
        font-weight: 500;
        color: #fff;
    } */

</style>