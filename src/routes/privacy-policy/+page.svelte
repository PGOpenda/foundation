<script>
// @ts-nocheck

    import privacies from '$lib/data/privacy-policy.json';
    import DOMPurify from 'dompurify';
    
    function convertNewlinesToBr(text) {
        const sanitizedText = DOMPurify.sanitize(text.replace(/\n/g, '<br>'))
        return sanitizedText;
    }
</script>

<svelte:head>
    <title>Privacy Policy - Ben Kijuu Foundation</title>
    <meta name="description" content="Review the privacy policy of the Ben Kijuu Foundation to understand how we collect, use, and protect your personal information.">
    <meta name="keywords" content="privacy policy, data protection, ben kijuu foundation privacy, personal information policy">
</svelte:head>

<div class="header">
    <h1>
        Privacy Policy
    </h1>
</div>

<div class="privacy">
    <div class="privacy-info">

        <h3>Last updated: 28/07/2024</h3> <br>   
            
        {#each privacies as privacy}
            <h3>{privacy.heading}</h3> <br>
            <p>{@html convertNewlinesToBr(privacy.paragraph)}</p> <br>
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

    .privacy {
        padding: 70px 100px;
        background-color: #fff;
        text-align: center;
    }

    .privacy-info {
        display: inline-block;
        max-width: 60%; 
        width: 100%;
        margin: 0 auto;
        text-align: left;
    }

    .privacy-info h3{
        font-size: 1.5em;
    }

    @media screen and (max-width: 600px) {
        .header {
            padding: 30px 20px;
        }

        .header h1 {
            font-size: 2.5em;
        }

        .privacy{
            padding: 20px;           
        }

        .privacy-info {
            max-width: 100%;
        }
    }
</style>