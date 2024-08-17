<script>
// @ts-nocheck

	import liver_cancer_header from '$lib/assets/liver-cancer.webp';
	import liver_cancer_illustration from '$lib/assets/liver-cancer-illustration.webp';
	import general_consideration from '$lib/assets/general-consideration.webp';
	import hepatocellular_carcinoma from '$lib/assets/hepatocellula-carcinoma.webp';
	import intrahepatic_cholangiocarcinoma from '$lib/assets/Intrahepatic-cholangiocarcinoma.webp';
	import hepatoblastoma from '$lib/assets/Hepatoblastoma.webp';
	import angiosarcoma_hemangiosarcoma from '$lib/assets/Angiosarcoma-hemangiosarcoma.webp';
	import { smoothScroll } from '$lib/actions/smoothScroll';
	import classifications from '$lib/data/liver-classifications.json'
	import treatments from '$lib/data/liver-treatments.json'
    import DOMPurify from 'dompurify';
    
    function convertNewlinesToBr(text) {
        const sanitizedText = DOMPurify.sanitize(text.replace(/\n/g, '<br>'))
        return sanitizedText;
    }

	import { onMount } from 'svelte';
	import Popup from '$lib/components/Popup.svelte';
	import { popupStore } from '$stores/popupStore';

	onMount(() => {
		popupStore.set(true);
	});

</script>

<svelte:head>
    <title>About Liver Cancer - Ben Kijuu Foundation</title>
    <meta name="description" content="Learn about liver cancer, its causes, symptoms, treatments, and prevention strategies to help raise awareness and support for those affected.">
    <meta name="keywords" content="about liver cancer, liver cancer causes, liver cancer symptoms, liver cancer treatments, liver cancer prevention">
</svelte:head>

<div class="header">
	<div>
		<h1>Liver Cancer</h1>
	</div>
	<img src={liver_cancer_header} alt="a patient with a nurse" />
</div>

<!-- <Popup message = "discalimer"/> -->

<div class="info">
	<div class="nav">
		<ul>
			<li><a href="#liver-info" use:smoothScroll>About Liver Cancer</a></li>
			<li><a href="#causes" use:smoothScroll>Causes of Liver Cancer</a></li>
			<li><a href="#treatment" use:smoothScroll>Treatment Options</a></li>
			<li><a href="#analysis" use:smoothScroll>Analysis</a></li>
			<li><a href="#disclaimer" use:smoothScroll>Disclaimer</a></li>
		</ul>
	</div>

	<div class="liver-info" id="liver-info">
		<div class="what-is-liver-cancer">
			<div>
				<h2>What is liver cancer?</h2>
				<p>
					Liver cancer (also known as hepatic cancer, primary hepatic cancer, or primary hepatic
					malignancy) is a type of cancer that begins in the liver. Liver cancer can be primary,
					meaning it begins in the liver. Hepatic metastasis, or secondary, meaning it travels from
					another part of the body to the liver. Of the two types of liver cancer, liver metastasis
					is the most common.
				</p>
			</div>
			<img src={liver_cancer_illustration} alt="Liver Cancer Illustration" height="250" />
		</div>

		<h2>Classifications of Liver Cancer</h2>
		<p>
			In addition to the liver's parenchyma, additional components like the bile duct, blood
			arteries, and immune cells can also cause liver cancer.
			<br />
		</p>

		<ol>
			{#each classifications as classification}
			<li>
				<strong>{classification.heading} </strong> <br />
				{classification.paragraph}
			</li>
			{/each}
		</ol>
	</div>
</div>

<div class="causes" id="causes">
	<h2>Causes of Liver Cancer</h2>

	<p>
		Viral infection with hepatitis C virus (HCV) or Hepatitis B virus (HBV) is the chief cause of
		liver cancer in the world today, accounting for 80% of HCC
	</p>

	<div class="causes-list">
		<div class="causes-list-1">
			<ul>
				<li>Viral infection</li>
				<li>Aflatoxin</li>
				<li>Obesity</li>
				<li>Smoking</li>
				<li>Liver fluke infection</li>
			</ul>
		</div>
		<div class="causes-list-2">
			<ul>
				<li>Cirrhosis</li>
				<li>High grade dysplastic nodules</li>
				<li>Diabetes</li>
				<li>Primary sclerosing cholangitis</li>
				<li>Genetic conditions e.g. untreated hereditary hemochromatosis</li>
			</ul>
		</div>
		
	</div>
</div>

<div class="treatment" id="treatment">
	<div>
		<h2>Treatment for liver cancer</h2>
		<p>
			The kind and stage of the cancer, as well as your health, will determine how you are treated.
		</p>
	</div>

	<div>
		<div class="treatment-info">
			<div>
				<h3>{treatments[0].heading}</h3>
				<p>
					{@html convertNewlinesToBr(treatments[0].paragraph)}
				</p>
			</div>
			<img src={general_consideration} alt="Doctor speaking to a patient" height="250" />
		</div>

		<div class="treatment-info">
			<img src={hepatocellular_carcinoma} alt="Patient undergoing chemotherapy" height="250" />
			<div>
				<h3>{treatments[1].heading}</h3>
				<p>
					{@html convertNewlinesToBr(treatments[1].paragraph)}
				</p>
			</div>
		</div>

		<div class="treatment-info">
			<div>
				<h3>{treatments[2].heading}</h3>
				<p>
					{@html convertNewlinesToBr(treatments[2].paragraph)}
				</p>
			</div>
			<img
				src={intrahepatic_cholangiocarcinoma}
				alt="Patient getting diagnosis from two doctors"
				height="250"
			/>
		</div>

		<div class="treatment-info">
			<img src={hepatoblastoma} alt="Patient recieving treatment" height="250" />
			<div>
				<h3>{treatments[3].heading}</h3>
				<p>
					{@html convertNewlinesToBr(treatments[3].paragraph)}
				</p>
			</div>
		</div>

		<div class="treatment-info">
			<div>
				<h3>{treatments[4].heading}</h3>
				<p>
					{@html convertNewlinesToBr(treatments[4].paragraph)}
				</p>
			</div>
			<img src={angiosarcoma_hemangiosarcoma} alt="Patient recieving treatment" height="250" />
		</div>
	</div>
</div>

<div class="analysis" id="analysis">
	<h2>Statistical Analysis</h2>
	<div class="analysis-info">
		<p>
			According to the most recent epidemiological data, liver cancer ranks in the top ten for both
			prevalence and fatality. According to the Global Burden of Disease Liver Cancer Collaboration,
			new incidences of liver cancer grew by 75% each year between 1990 and 2015. According to the
			most recent data, 841,000 new liver cancer diagnoses and 782,000 deaths occur worldwide each
			year.
		</p>
	</div>
</div>

<div class="disclaimer" id="disclaimer">
	<h1>
		DISCLAIMER: <br /> THE INFORMATION PROVIDED ON THIS SITE IS FOR INFORMATIONAL PURPOSES ONLY AND IS
		NOT INTENDED AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. ALWAYS SEEK
		THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING
		A MEDICAL CONDITION.
	</h1>
</div>

<style>
	.header {
		padding: 50px 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.header h1 {
		font-size: 3.3em;
		padding: 80px 0;
	}

	.header img {
		max-width: 500px;
		border-radius: 120px 20px 120px 20px;
	}

	.info {
		padding: 70px 100px;
		background-color: #fff;
	}

	.nav {
		border: 1px solid black;
		border-radius: 10px;
		width: 80%;
		margin: 0 auto;
	}

	.nav ul {
		list-style: none;
		padding: 10px;
		display: flex;
		justify-content: center;
	}

	.nav ul li {
		padding: 5px 15px;
	}

	.nav a {
		color: black;
	}

	.nav a:hover {
		color: #80af81;
		border-bottom: 1px solid #80af81;
		transition: 500ms;
	}

	[id] {
		scroll-margin-top: 200px;
	}

	.liver-info {
		margin-top: 35px;
	}

	h2,
	p,
	ol {
		margin-bottom: 20px;
	}

	h2 {
		font-size: 2em;
	}

	.liver-info ol {
		line-height: 1.5em;
		width: 80%;
		margin-left: 20px;
	}

	.what-is-liver-cancer {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.what-is-liver-cancer img {
		margin: auto auto;
		max-width: 350px;
	}
	.causes {
		padding: 70px 100px;
		/* text-align: center; */
	}

	.causes h2,
	.causes p {
		text-align: center;
	}

	.causes-list {
		width: 70%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* align-items: center; */
		margin-left: auto;
		margin-right: auto;
		border: 1px solid black;
		border-radius: 10px;
		padding: 50px 0px;
	}

	.causes-list li {
		line-height: 2em;
	}

	.causes-list-1 {
		margin-left: 60px;
	}

	.causes-list-2 {
		margin-left: 30px;
	}

	.treatment {
		padding: 70px 100px;
		background-color: #fff;
	}

	.treatment h3 {
		font-size: 1.5em;
	}

	.treatment-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 60px;
	}

	.treatment-info img {
		/* margin-left: 30px; */
		margin: auto auto;
		max-width: 400px;
		border-radius: 120px 20px 120px 20px;
	}

	.analysis {
		padding: 70px 100px;
		text-align: center;
	}

	.disclaimer {
		padding: 50px 100px;
		color: red;
		background-color: #fff;
		font-size: 0.8em;
	}

	/* Mobile styles */
	@media screen and (max-width: 600px) {
		.header{
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			padding: 20px;
		}

		.header img{
			height: 240px;
			max-width: fit-content;
		}

		.header h1{
			font-size: 2.5em;
			padding: 50px 0;
		}

		.info{
			padding: 20px;
		}

		.info .nav{
			display: none;
		}

		.liver-info{
			display: flex;
			flex-direction: column;
			margin-top: 10px;
		}

		.what-is-liver-cancer{
			display: flex;
			flex-direction: column;
			margin-bottom: 2em;
		}

		.what-is-liver-cancer h2{
			font-size: 1.8em;
		}

		.liver-info h2{
			font-size: 1.8em;
		}

		.liver-info ol{
			width: 90%;
		}

		.causes {
			padding: 20px;
		}

		.causes h2{
			font-size: 1.8em;
		}

		.causes-list{
			display: flex;
			flex-direction: column;
			width: 90%;
			padding: 30px 0;
		}

		.causes-list-1, .causes-list-2{
			margin: 0;
			padding: 0;
			margin-left: 4em;
		}

		.treatment{
			padding: 20px;
		}

		.treatment h2{
			font-size: 1.8em;
		}

		.treatment-info{
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.treatment-info img{
			height: 190px;
			width: fit-content;
			margin: 0;
			margin: 1em 0;
		}

		.analysis{
			padding: 20px;
		}

		.analysis h2{
			font-size: 1.8em;
		}

		.disclaimer{
			padding: 20px;
		}

		.disclaimer h1{
			font-size: 1.7em;
		}
	}
</style>
