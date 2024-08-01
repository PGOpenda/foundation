<script>
    import partners from '$lib/assets/partners.jpg'
</script>

<div class="heading">
    <div>
        <h1>Our Partners</h1>
    </div>

    <img src="{partners}" alt="Two hands holiding a piece of a puzzle">
</div>

<div style="background-color: #fff; padding:100px;">
    <h1>Info about partners goes here</h1>
</div>
<style>
    .heading {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    .heading h1{
        font-size: 3.3em;
        padding: 80px 0;
    }

    .heading img{
        height: 330px;
        border-radius: 120px 20px 120px 20px;
    }
</style>