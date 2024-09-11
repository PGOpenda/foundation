<script>
	import who from '$lib/assets/who-we-are.webp';
</script>

<svelte:head>
    <title>About Us - Ben Kijuu Foundation</title>
    <meta name="description" content="Learn about the Ben Kijuu Foundation, our mission, vision, and core values in the fight against liver cancer.">
    <meta name="keywords" content="liver cancer foundation, cancer awareness, liver cancer research, about liver cancer support">
</svelte:head>

<div class="about-heading">
	<div>
		<h3>All About the</h3>
		<h1>
			Ben Kijuu <br />Foundation
		</h1>
	</div>
	<img src={who} alt="people holding hands" />
</div>

<div class="about-info">
	<h2>
		Our Vision: To create a future where no one has to face liver cancer alone, and where every
		individual can look forward to a healthy, hopeful, and vibrant life.
	</h2>
	<p>
		Our vision is a world where liver cancer is a preventable and curable disease, where every
		patient has access to the best possible care, and where research and innovation continually push
		the boundaries of what is possible.
	</p>

	<h2>Our mission: To advance the understanding, prevention, and treatment of liver cancer.</h2>
	<p>
		We aim to provide patients and their families with the necessary resources and support to
		navigate their journey, while fostering a community of hope and resilience. Through innovative
		research, public education, and compassionate care, we are committed to reducing the impact of
		liver cancer on individuals and society.
	</p>
</div>

<div class="about-cards">
	<div>
		<h2>Our Core Values</h2>
	</div>

	<div class="cards">
		<div class="card">
			<h3>
				Innovation <br />
				<span class="material-symbols-outlined"> lightbulb </span>
			</h3>
		</div>

		<div class="card">
			<h3>
				Compassion <br />
				<span class="material-symbols-outlined"> favorite </span>
			</h3>
		</div>

		<div class="card">
			<h3>
				Collaboration <br />
				<span class="material-symbols-outlined"> handshake </span>
			</h3>
		</div>

		<div class="card">
			<h3>
				Integrity <br />
				<span class="material-symbols-outlined"> verified </span>
			</h3>
		</div>

		<div class="card">
			<h3>
				Empowerment <br />
				<span class="material-symbols-outlined"> groups </span>
			</h3>
		</div>

		<div class="card">
			<h3>
				Dedication <br />
				<span class="material-symbols-outlined"> psychology </span>
			</h3>
		</div>
	</div>
</div>

<style>
	.about-heading {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 50px 100px;
	}

	.about-heading h3 {
		font-size: 1.8em;
		padding: 20px 0;
	}

	.about-heading h1 {
		font-size: 3.3em;
	}

	.about-heading img {
		max-width: 600px;
		border-radius: 120px 20px 120px 20px;
	}

	.about-info {
		padding: 50px 100px;
		background-color: #fff;
		text-align: center;
	}

	.about-info h2,
	.about-info p {
		display: inline-block;
		max-width: 700px; /* Adjust this value as needed */
		width: 100%;
		margin: 0 auto;
	}

	.about-info h2 {
		color: #1a5319;
		font-size: 2.2em;
		margin-bottom: 25px;
	}

	.about-info p {
		margin-bottom: 70px;
		text-align: left;
	}

	.about-cards {
		padding: 50px 100px;
		text-align: center;
	}

	.about-cards h2 {
		font-size: 2.2em;
	}

	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		width: 100%;
		padding: 20px;
		margin-left: 30px;
	}

	.card {
		width: 80%;
		padding: 30px;
		margin-bottom: 30px;
		border-radius: 10px;
		background-color: #1a5319;
		color: #fff;
	}

	.card:hover {
		background-color: #80af81;
		color: black;
		transition: 500ms;
	}

	.card h3 {
		font-size: 1.3em;
	}

	.card span {
		margin-top: 10px;
		font-size: 2em;
	}

	/* Mobile sytles */
	@media screen and (max-width: 600px) {
		.about-heading{
			display: flex;
			flex-direction: column-reverse;
			padding: 20px;
			align-items: center;
		}

		.about-heading h1{
			font-size: 2.5em;
		}

		.about-heading h1, .about-heading h3{
			text-align: left;
		}

		.about-heading img{
			margin-top: 1em;
			max-width: fit-content;
		}

		.about-info {
			padding: 50px 20px;
		}

		.about-info p{
			margin-bottom: 40px;
		}

		.about-info h2{
			font-size: 1.7em;
		}

		.about-cards{
			padding: 20px;
		}

		.cards{
			display: block;
			padding: 0;
			margin-top: 2em;
			margin-left: 0;
		}

		.card {
			width: 80%;
			margin: 1em auto;
		}

		.about-cards h2{
			font-size: 2em;
		}
	}
</style>
