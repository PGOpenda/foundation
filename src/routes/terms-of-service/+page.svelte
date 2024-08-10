<script>
    import terms from '$lib/data/terms-of-service.json';
    import DOMPurify from 'dompurify';
    
    function convertNewlinesToBr(text) {
        const sanitizedText = DOMPurify.sanitize(text.replace(/\n/g, '<br>'))
        return sanitizedText;
    }
</script>

<svelte:head>
    <title>Terms of Service - Ben Kijuu Foundation</title>
    <meta name="description" content="Understand the terms of service for using the Ben Kijuu Foundation's website and engaging with our services and resources.">
    <meta name="keywords" content="terms of service, website terms, ben kijuu foundation terms, service terms">
</svelte:head>

<div class="header">
    <h1>
        Terms of Service
    </h1>
</div>

<div class="service">
    <div class="service-info">

        <h3>Last updated: 28/07/2024</h3> <br>
            
        {#each terms as term}
            <h3>{term.heading}</h3> <br>
            <p>{@html convertNewlinesToBr(term.paragraph)}</p> <br>    
        {/each}
        
    </div>
</div>

<style>
    .header {
        padding: 50px 100px;
    }

    .header h1 {
        font-size: 3.3em;
    }

    .service {
        padding: 70px 100px;
        background-color: #fff;
        text-align: center;
    }

    .service-info {
        display: inline-block;
        max-width: 60%; 
        width: 100%;
        margin: 0 auto;
        text-align: left;
    }

    .service-info h3{
        font-size: 1.5em;
    }
</style>