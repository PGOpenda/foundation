<script>
	import event from '$lib/assets/events.jpg';
	import donate from '$lib/assets/donate.webp';
	import volunteer from '$lib/assets/volunteer.webp';
</script>

<svelte:head>
    <title>Get Involved - Ben Kijuu Foundation</title>
    <meta name="description" content="Join the Ben Kijuu Foundation in the fight against liver cancer by donating, volunteering, or participating in our events and initiatives.">
    <meta name="keywords" content="get involved, liver cancer support, donate to liver cancer, volunteer liver cancer, liver cancer events">
</svelte:head>

<div class="heading">
	<div>
		<h1>Get Involved</h1>
	</div>

	<img src={event} alt="People volunteering" />
</div>

<div class="info">
	<h1>
		Stay tuned for our upcoming events
	</h1>
</div>

<style>
	.heading {
		padding: 50px 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.heading h1 {
		font-size: 3.3em;
		padding-top: 80px;
	}

	.heading img {
		max-width: 600px;
		border-radius: 120px 0px 0px 0px;
	}

	.info {
		padding: 70px 100px;
		background-color: #fff;
	}

	.info h1{
		font-size: 3rem;
		color: #1a5319;
		text-align: center;
		padding: 4rem 0rem;
	}

	

	/* Mobile view */
	@media screen and (max-width: 600px) {
		.heading{
			display: flex;
			flex-direction: column-reverse;
			padding: 10px;
			align-items: center;
		}

		.heading h1{
			font-size: 2.5em;
			text-align: left;
			padding: 50px 0;
		}

		.heading img{
			/* height: 230px; */
			max-width: 370px;
		}

		.info{
			padding: 20px;
		}

	}
</style>