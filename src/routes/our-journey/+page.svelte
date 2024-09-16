<script>
    import journey from '$lib/assets/journey.jpg'
    import JourneyTimeline from '$lib/components/JourneyTimeline.svelte';
</script>

<svelte:head>
    <title>Our Journey - Ben Kijuu Foundation</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
</svelte:head>

<div class="journey-heading">
    <div>
        <h1>Our Journey</h1>
    </div>

    <img src={journey} alt="a lady sitting on a clif looking at the valley below.">
</div>


<div class="journey-info">
    <JourneyTimeline />
</div>

<style>
    .journey-heading{
        padding: 50px 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .journey-heading h1{
        padding-top: 5rem;
        font-size: 3.3rem;
    }

    .journey-heading img{
		border-radius: 120px 0px 0px 0px;
        max-width: 600px;
    }

    .journey-info{
        background-color: white;
        padding:3rem 0rem;
    }
</style>