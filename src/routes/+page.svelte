<script>
	import FAQ from '$lib/components/FAQ.svelte';
	import hero_pic from '$lib/assets/hero-pic.jpg';
	import img_card_1 from '$lib/assets/img-card-1.jpg';
	import img_card_2 from '$lib/assets/img-card-2.jpg';
	import img_card_3 from '$lib/assets/img-card-3.jpg';
	import faqData from '$lib/data/faq-data.json';
</script>

<svelte:head>
    <title>Homepage - Ben Kijuu Foundation</title>
    <meta name="description" content="The Ben Kijuu Foundation is dedicated to raising awareness, supporting research, and providing resources for those affected by liver cancer.">
    <meta name="keywords" content="liver cancer, liver cancer support, cancer awareness, liver health, cancer research">
</svelte:head>


<div class="hero">
	<div class="hero-info">
		<h1>Fighting Liver Cancer Together: Hope, Research, Support</h1>
		<a href="/about-us"> The Ben Kijuu Foundation</a>
	</div>

	<img src={hero_pic} alt="An old man with his daughter playing tennis"/>
</div>

<div class="hero-2" >
	<h1>
		<span>Welcome</span>
	</h1>

	<p >
		The Ben Kijuu Foundation strives to provide support, education, and resources to those affected
		by liver cancer and to fund research for better treatments and ultimately a cure
	</p>
</div>

<div class="imgs">
	<img src={img_card_1} alt="A family taking a selfie together" />
	<img src={img_card_2} alt="A patient getting instructions from a nurse" />
	<img src={img_card_3} alt="A father with his daughter smiling" />
</div>

<div class="partners">
	<h1>
		<span>Our Partners</span>
	</h1>
</div>

<FAQ {faqData} />

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-top: 50px;
	}

	.hero-info{
		padding-top: 4rem;
		padding-left: 4rem;
	}

	.hero h1 {
		font-weight: 300;
		font-size: 3.5em;
		padding-bottom: 25px;
	}

	.hero a {
		background-color: #1a5319;
		color: #fff;
		border: 1px solid #1a5319;
		color: #fff;
		padding: 13px;
		border-radius: 25px;
		font-size: 1.2rem;
	}

	.hero a:hover {
		background-color: #80af81;
		border: 1px solid #80af81;
		color: black;
		transition: 500ms;
	}

	.hero img {
		max-width: 660px;
		border-radius: 120px 0px 0px 0px;
		margin-left: auto;
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
		max-width: 340px;
		padding: 0px 5px;
		border-radius: 20px 20px 20px 20px;
	}

	.partners {
		padding: 150px 100px;
		background-color: #fff;
		text-align: center;
	}

	.partners h1 {
		font-size: 3em;
		margin-bottom: 10px;
	}

	.partners span {
		color: #1a5319;
	}

	@media screen and (max-width: 600px) {
		.hero{
			display: block;
			padding: 0px;
			/* text-align: center; */
		}

		.hero-info{
			padding: 1.5rem ;

		}

		.hero div{
			text-align: left;
		}

		.hero h1{
			font-size: 2.5em;
			text-align: left;
		}

		.hero img{
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

		.partners{
			padding: 20px;
		}

		.partners h1{
			font-size: 2.1em;
		}
	}
</style>
