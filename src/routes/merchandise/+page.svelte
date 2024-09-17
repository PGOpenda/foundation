<script>
    import merch from '$lib/assets/merchandise.jpg'
</script>

<svelte:head>
    <title>Merchandise - Ben Kijuu Foundation</title>
    <meta name="description" content="Support the fight against liver cancer by purchasing our exclusive foundation merchandise. Browse a range of apparel, accessories, and more. Proceeds help fund liver cancer research, awareness, and patient support programs.">
    <meta name="keywords" content="liver cancer foundation merchandise, liver cancer awareness, charity apparel, cancer foundation products, support liver cancer research, donate to liver cancer, awareness apparel, liver cancer fundraising, cancer support merchandise, foundation gear">
</svelte:head>

<div class="merch-heading">
    <div>
        <h1>
            Merchandise
        </h1>
    </div>

    <img src={merch} alt="Clothing items">
</div>

<div class="merch-section">

</div>

<style>
    .merch-heading{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    .merch-heading h1{
        font-size: 3.5rem;
        padding-top: 80px;
    }

    .merch-heading img{
        max-width: 600px;
		border-radius: 120px 0px 0px 0px;
    }

    .merch-section{
        padding: 50px 100px;
        background-color: white;
    }

    /* Mobile Styles */
    @media screen and (max-width: 600px) {
        .merch-heading{
			display: flex;
			flex-direction: column-reverse;
			padding: 10px;
			align-items: center;
		}

		.merch-heading h1{
			font-size: 2.5em;
			text-align: left;
			padding: 50px 0;
		}

		.merch-heading img{
			/* height: 230px; */
			max-width: 370px;
		}
    }
</style>