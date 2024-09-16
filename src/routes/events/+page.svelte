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
	<div class="info-grid">
		<div>
			<h2>
				<span>Donate</span>
			</h2>
			<p>
				Your donations help us fund vital research and provide support to those affected by liver
				cancer. Every contribution makes a difference. <br /> <br />
				<button>Coming Soon</button>
			</p>
		</div>
		<img src={donate} alt="A jar with donation money" />
	</div>

	<div class="info-grid" id="col-reverse" >
		<img src={volunteer} alt="A volunteer" />
		<div>
			<h2>
				<span>Volunteer</span>
			</h2>
			<p>
				Join our team of dedicated volunteers and make a direct impact on the liver cancer
				community. Learn about volunteer opportunities near you. <br /> <br />
				<button>Coming Soon</button>
			</p>
		</div>
	</div>

	<div class="info-grid">
		<div>
			<h2>
				<span>Events</span>
			</h2>
			<p>
				Participate in our events to raise awareness and funds for liver cancer research and
				support. Check out our upcoming events and how you can get involved.<br /> <br />
				<button>Coming Soon</button>
			</p>
		</div>
		<img src="" alt="people gathered having a good time" />
	</div>
</div>

<style>
	.heading {
		padding: 50px 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.heading h1 {
		font-size: 3.3em;
		padding-top: 9rem;
	}

	.heading img {
		max-width: 600px;
		border-radius: 120px 0px 0px 0px;
	}

	.info {
		padding: 70px 100px;
		background-color: #fff;
	}

	.info span {
		color: #1a5319;
	}

	.info h2 {
		font-size: 2.2em;
		margin-bottom: 20px;
		padding-top: 40px;
	}

	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 100px;
	}

	.info-grid img {
		max-width: 400px;
		border-radius: 120px 0px 0px 0px;
		margin: auto;
	}

	.info-grid button {
		background-color: #1a5319;
		color: #fff;
		border: none;
		padding: 15px;
		font-weight: 700;
		font-size: 1em;
		border-radius: 10px;
		cursor: not-allowed;
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

		.info h2{
			font-size: 2em;
		}

		.info-grid{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin-bottom: 1.5em;
		}

		#col-reverse{
			flex-direction: column-reverse;
		}

		.info-grid img{
			/* height: 200px; */
			max-width: fit-content;
			margin-top: 1.5em;
		}

	}
</style>