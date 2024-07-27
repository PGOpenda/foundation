<div class="contact">
    <h1>Here to <span>help</span></h1>
    <div class="contact-form">
        <form>
            <label for="subject">Subject:</label><br>
            <input type="text" id="subject" name="subject" required><br>
            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email"><br>
            <label for="message">Message:</label><br>
            <textarea name="message" id="message"></textarea><br>
            <button type="submit" class="submit">Submit</button>
        </form>

        <div class="contact-info">
            <h2>Or Contact Us At:</h2>
            <h3>Email: </h3>
            <p>example@email.com</p>
            <h3>Telephone: </h3>
            <p>+1 222 3333 444</p>
        </div>
    </div>
</div>

<style>
    .contact {
        padding: 50px 100px;
        height: 95vh;
        
    }

    .contact h1 {
        font-weight: 400;
        font-size: 3.3em;
        text-align: center;
    }

    .contact span {
        color: #9d0063;
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
        background-color: #ffb4d0;
        border: 1px solid #ffb4d0;
        font-size: 1em;

    }

    .contact-form textarea {
        width: 70%;
        height: 40%;
        margin-bottom: 20px;
        background-color: #ffb4d0;
        border: 1px solid #ffb4d0;
        font-size: 1em;
    }

    .contact-form .submit{
        align-items: baseline;
        width: fit-content;
        padding: 12px;
        background-color: #9d0063;
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
        padding: 0px 30px;
    }

    .contact-info h2{
        font-weight: 400;
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    .contact-info h3{
        font-weight: 400;
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    .contact-info p{
        margin-bottom: 15px;
    }
</style>