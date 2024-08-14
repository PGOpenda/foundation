<svelte:head>
    <title>Contact Us - Ben Kijuu Foundation</title>
    <meta name="description" content="Get in touch with the Ben Kijuu Foundation for more information, support, or to get involved in our mission against liver cancer.">
    <meta name="keywords" content="contact ben kijuu foundation, liver cancer support, ben kijuu foundation contact">
</svelte:head>

<div class="contact">
    <h1>Here to <span>help</span></h1>
    <div class="contact-form">
        <form>
            <h2>
                Send us a message
            </h2>
            <label for="subject">Subject:</label><br>
            <input type="text" id="subject" name="subject" required><br>
            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email"><br>
            <label for="message">Message:</label><br>
            <textarea name="message" id="message"></textarea><br>
            <button type="submit" class="submit">Submit</button>
        </form>

        <div class="contact-info">
            <h2>Or contact us at</h2>
            <h3>Email: </h3>
            <p>example@email.com</p>
            <h3>Telephone: </h3>
            <p>+1 222 3333 444</p>
        </div>
    </div>
</div>

<style>
    .contact {
        padding: 60px 100px;
        /* height: 100vh; */
    }

    .contact h1 {
        font-size: 3.3em;
        text-align: center;
    }

    .contact span {
        color: #1A5319;
    }

    .contact-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 50px 70px;
    }

    .contact-form label {
        font-size: 1.2em;
        font-weight: 300;
    }

    .contact-form input {
        margin-bottom: 20px;
        width: 70%;
        height: 12%;
        background-color: #80AF81;
        border: 1px solid #80AF81;
        font-size: 1em;
    }

    .contact-form textarea {
        width: 70%;
        height: 40%;
        margin-bottom: 20px;
        background-color: #80AF81;
        border: 1px solid #80AF81;
        font-size: 1em;
    }

    .contact-form form h2{
        font-size: 2.2em;
        margin-bottom: 15px;
    }

    .contact-form .submit{
        align-items: baseline;
        width: fit-content;
        padding: 12px;
        background-color: #1A5319;
        color: #fff;
        border-radius: 22px;
        border: none;
        font-size: 1.2em;
        font-family: Lora;
    }

    .contact-form .submit:hover{
        cursor: pointer;
    }

    .contact-form input:focus, .contact-form textarea:focus {
        outline: none;
    }

    .contact-info{
        /* padding: 0px 30px; */
        margin: auto;
    }

    .contact-info h2{
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    .contact-info h3{
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    .contact-info p{
        margin-bottom: 15px;
    }

    @media screen and (max-width: 600px) {
        .contact{
            padding: 20px;
        }
        
        .contact-form{
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: center;
            margin-top: 1em;
        }

        .contact-form form h2{
            font-size: 1.9em;
        }

        .contact-info{
            margin-top: 10em;
        }

        .contact h1{
            font-size: 2.5em;
        }

        .contact-info h2{
            font-size: 1.9em;
        }

        .contact-info h3, .contact-info p{
            text-align: center;
        }

        .contact-form input, .contact-form textarea{
            width: 100%;
        } 

        .contact-form input{
            height: 30%;
        }

        .contact-form textarea{
            height: 50%;
        }
    }
</style>