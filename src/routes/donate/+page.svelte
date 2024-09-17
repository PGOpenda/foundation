<script>
    import donations from '$lib/assets/donate.jpg'
</script>

<svelte:head>
    <title>Donate - Ben Kijuu Foundation</title>
    <meta name="description" content="Support the fight against liver cancer by donating to our foundation. Your contributions fund life-saving research, treatments, and care for patients battling liver cancer. Join us in raising awareness and making a difference in the lives of those affected by liver disease.">
    <meta name="keywords" content="ben kijuu foundation, donate to liver cancer, liver cancer research donations, liver disease support, liver cancer treatment funding, donate to cancer patients, liver cancer awareness, cancer charity, support cancer research, cancer foundation donations, liver disease foundation">
</svelte:head>

<div class="donations-heading">
    <div class="info">
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
        max-width: 600px;
		border-radius: 120px 0px 0px 0px;
    }

    .donations-info{
        padding: 50px 100px;
        background-color: white;
    }

    /* Mobile Styles */
    @media screen and (max-width: 600px) {
        .donations-heading{
			display: flex;
			flex-direction: column-reverse;
			padding: 10px;
			align-items: center;
		}

		.donations-heading h1{
			font-size: 2.5em;
			padding: 0px 0;
		}

        .donations-heading h3{
            font-size: 1.3rem;
        }

        .info{
            padding: 1.2rem 0rem;
            text-align: center;
        }

		.donations-heading img{
			/* height: 230px; */
			max-width: 370px;
		}
    }
</style>