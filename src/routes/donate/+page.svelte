<script>
    import donations from '../../lib/assets/donations.jpg'
</script>

<svelte:head>
    <title>Donate - Ben Kijuu Foundation</title>
    <meta name="description" content="Support the fight against liver cancer by donating to our foundation. Your contributions fund life-saving research, treatments, and care for patients battling liver cancer. Join us in raising awareness and making a difference in the lives of those affected by liver disease.">
    <meta name="keywords" content="ben kijuu foundation, donate to liver cancer, liver cancer research donations, liver disease support, liver cancer treatment funding, donate to cancer patients, liver cancer awareness, cancer charity, support cancer research, cancer foundation donations, liver disease foundation">
</svelte:head>

<div class="donations-heading">
    <div>
        <h1>
            Donate
        </h1>
    
        <h3>
            Lives are saved by your generosity. Not just tomorrow or in the near future, but right now.
        </h3>
    </div>

    <img src={donations} alt="donations">
</div>

<div class="donations-info">

</div>

<style>
    .donations-heading{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding:50px 100px;
    }

    .donations-heading h1{
        font-size: 3.5rem;
        padding-top: 3rem;
    }

    .donations-heading h3{
        padding-top: 1rem;
        font-size: 1.5rem;
    }

    .donations-heading img{
		border-radius: 120px 20px 120px 20px;
    }

    .donations-info{
        padding: 50px 100px;
        background-color: white;
    }
</style>