<script>
	import partners from '$lib/assets/partners.webp';
</script>

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
</style>
