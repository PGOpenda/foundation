<script>
    import {page} from '$app/stores'
</script>

<svelte:head>
    <title>{$page.status} {$page.error?.message}</title>
</svelte:head>

<div class="error">
	<h1>
	<span class="material-symbols-outlined">sentiment_dissatisfied</span>
		{$page.status} {$page.error?.message}
	</h1>
</div>

<style>
	.error {
		/* text-align: center; */
		/* padding: 70px 100px; */
		height: 55vb;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.error h1 {
		font-size: 3.5em;
	}

	.error span {
		font-size: 0.9em;
	}
</style>
