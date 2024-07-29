<script>
    import get_involved from "$lib/assets/get-involved.jpg"
    import donate from '$lib/assets/donate.jpg'
    import volunteer from '$lib/assets/volunteer.jpg'
</script>

<div class="heading">
    <div>
        <h1>
            Get Involved
        </h1>
    </div>

    <img src="{get_involved}" alt="">
</div>

<div class="info">

    <div class="info-grid">
        <div>
            <h2>
                <span>Donate</span> 
             </h2>
            <p>
                Your donations help us fund vital research and provide support to those affected by liver cancer. 
                Every contribution makes a difference.
            </p>

        </div>
        <img src="{donate}" alt="">
    </div>
    
</div>

<div class="info">

    <div class="info-grid">
        <img src="{volunteer}" alt="">
        <div>
              <h2>
                <span>Volunteer</span>
            </h2>
            <p>
                Join our team of dedicated volunteers and make a direct impact on the liver cancer community. 
                Learn about volunteer opportunities near you.
            </p>
        </div>
    </div>
    
</div>

<div class="info">
    <h2>
        <span>Events</span>
    </h2>

    <div class="info-grid">
        <div>
            <p>
                Participate in our events to raise awareness and funds for liver cancer research and support.
                Check out our upcoming events and how you can get involved.
            </p>

        </div>
        <div>
            <p>
                An Image is placed here. 
            </p>
        </div>
    </div>
    
</div>


<style>
    
    .heading{
        padding:70px 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .heading h1 {
        font-size: 3.3em;
        padding: 80px 0;
    }

    .heading img{
        height: 350px;
        border-radius: 120px 20px 120px 20px;
    }

    .info {
        padding: 50px 100px;
        /* background-color: #fff; */
        width: 80%;
        margin: 0 auto;
    }

    .info span{
        color: #9d0063;
    }

    .info h2 {
        font-size: 2.2em;
        margin-bottom: 20px;
        padding-top: 40px;
    }

    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .info-grid img{
        height: 250px;
        border-radius: 120px 20px 120px 20px;
    }
</style>