<script>
	import news from '$lib/assets/news.webp';
</script>

<div class="heading">
	<div>
		<h1>News & Updates</h1>
	</div>

	<img src={news} alt="A stack of newspapers" />
</div>

<div class="blogs">
	<h2>Read the latest news, stories, and updates from us.</h2>
</div>

<style>
	.heading {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 70px 100px;
	}

	.heading h1 {
		font-size: 3.3em;
		padding: 80px 0;
	}

	.heading img {
		height: 330px;
		border-radius: 120px 20px 120px 20px;
	}

	.blogs {
		padding: 70px 100px;
		background-color: #fff;
	}

	.blogs h2 {
		font-size: 2em;
	}
</style>
