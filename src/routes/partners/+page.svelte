<script>
	import partners from '$lib/assets/partners.webp';
</script>

<svelte:head>
    <title>Our Partners - Ben Kijuu Foundation</title>
    <meta name="description" content="Meet the partners and organizations that collaborate with the Liver Hope Foundation to support liver cancer research and awareness initiatives.">
    <meta name="keywords" content="liver cancer partners, cancer foundation partners, ben kijuu foundation partners, cancer awareness partners">
</svelte:head>

<div class="heading">
	<div>
		<h1>Our Partners</h1>
	</div>

	<img src={partners} alt="Two hands holiding a piece of a puzzle" />
</div>

<div class="partner-info">
	<div>
		<h2>
			Our mission at the Ben Kijuu Foundation is to combat liver cancer by raising awareness,
			funding research, and providing assistance. Our partners' vital contributions, who also share
			our commitment to improving the lives of individuals impacted by liver cancer, further enhance
			our purpose.
		</h2>
	</div>
</div>

<style>
	.heading {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 50px 100px;
	}

	.heading h1 {
		font-size: 3.3em;
		padding: 80px 0;
	}

	.heading img {
		height: 330px;
		border-radius: 120px 20px 120px 20px;
	}

	.partner-info {
		padding: 70px 100px;
		background-color: #fff;
	}

	.partner-info div {
		width: 70%;
		margin: 0 auto;
		text-align: center;
	}

	/* Mobile devices */
	@media screen and (max-width: 600px) {
		.heading{
			display: flex;
			flex-direction: column-reverse;
			padding: 20px;
			align-items: center;
		}

		.heading h1{
			font-size: 2.5em;
			padding: 40px 0;
		}

		.heading img{
			height: 230px;
			width: fit-content;
		}

		.partner-info {
			padding: 40px 20px;
		}

		.partner-info div{
			width: 90%;
		}

		.partner-info div h2{
			font-size: 1.3em;
		}
	}
</style>
