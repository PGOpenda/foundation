<script>
	import FAQ from '$lib/components/FAQ.svelte';
	import hero_pic from '$lib/assets/hero-pic.webp';
	import img_car_1 from '$lib/assets/img-car-1.webp';
	import img_car_2 from '$lib/assets/img-car-2.webp';
	import img_car_3 from '$lib/assets/img-car-3.webp';
	import faqData from '$lib/data/faq-data.json';
	// import FadeIn from '$lib/components/FadeIn.svelte';
</script>

<svelte:head>
    <title>Homepage - Ben Kijuu Foundation</title>
    <meta name="description" content="The Ben Kijuu Foundation is dedicated to raising awareness, supporting research, and providing resources for those affected by liver cancer.">
    <meta name="keywords" content="liver cancer, liver cancer support, cancer awareness, liver health, cancer research">
</svelte:head>


<div class="hero">
	<div>
		<h1>Fighting Liver Cancer Together: Hope, Research, Support</h1>
		<a href="/about-us"> The Ben Kijuu Foundation</a>
	</div>

	<img src={hero_pic} alt="An old man with his daughter playing tennis" />
</div>

<div class="hero-2">
	<h1>
		<span>Welcome</span>
	</h1>

	<p>
		The Ben Kijuu Foundation strives to provide support, education, and resources to those affected
		by liver cancer and to fund research for better treatments and ultimately a cure
	</p>
</div>

<div class="imgs">
	<img src={img_car_1} alt="A family taking a selfie together" />
	<img src={img_car_2} alt="A patient getting instructions from a nurse" />
	<img src={img_car_3} alt="A father with his daughter smiling" />
</div>

<FAQ {faqData} />

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		padding: 50px 100px;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 3.3em;
		padding-bottom: 25px;
	}

	.hero a {
		background-color: #1a5319;
		color: #fff;
		border: 1px solid #1a5319;
		color: #fff;
		padding: 12px;
		border-radius: 25px;
	}

	.hero a:hover {
		background-color: #80af81;
		border: 1px solid #80af81;
		color: black;
		transition: 500ms;
	}

	.hero img {
		max-width: 700px;
		border-radius: 120px 20px 120px 20px;
		margin: auto;
	}

	.hero-2 {
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

	.hero-2 h1 {
		font-size: 3em;
		margin-bottom: 10px;
	}

	.hero-2 span {
		color: #1a5319;
	}

	.imgs {
		display: flex;
		justify-content: center;
		padding: 50px 100px;
		background-color: #fff;
		/* background: url(/background.svg); */
		background-size: cover;
	}

	.imgs img {
		max-width: 350px;
		padding: 0px 5px;
		border-radius: 120px 20px 120px 20px;
	}

	@media screen and (max-width: 600px) {
		.hero{
			display: block;
			padding: 20px;
			text-align: center;
		}

		.hero div{
			text-align: left;
		}

		.hero h1{
			font-size: 2.5em;
			/* text-align: left; */
		}

		.hero img{
			/* text-align: center; */
			margin-top: 3em;
			max-width: fit-content;
		}

		.imgs{
			display: block;
			padding: 20px;
			text-align: center;
			padding: 40px 0px;
		}

		.imgs img{
			/* height: 180px; */
			max-width: 380px;
			/* padding: 10px 0px; */
			margin: 10px 0px;
		}

		.hero-2{
			padding: 20px;
		}

		.hero-2 h1{
			font-size: 2.1em;
		}

		.hero-2 p{
			max-width: fit-content;
			font-size: 1em;
			padding: 0 1.5em;
		}
	}
</style>
