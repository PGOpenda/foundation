<footer>
	<div class="footer-section">
		<div>
			<a href="/">
				<img src="/Logo-2.png" alt="Ben Kijuu Foundation" class="logo"/>
			</a>
			
			<h3>Ben Kijuu Foundation</h3>
			<br> <br>

			<h3>Follow Us</h3> 
			<img src="/facebook.svg" alt="Facebook"class="social">
			<img src="/instagram.svg" alt="Instagram"class="social">
			<img src="/linkedin.svg" alt="LinkedIn"class="social">
			<img src="/twitter.svg" alt="X"class="social">	
		
		</div>
		<div class="contact">
			<h3>Get in touch</h3> <br>

			<p>+254 111 222 333</p>
			<p>example@email.com</p>
		</div>
		<div class="form">
			<form>
				<h3>STAY UP TO DATE ON THE LATEST NEWS FROM THE BEN KIJUU FOUNDATION</h3>
				<br>
				<input type="text" placeholder="Your Email Address"> <br> <br>
				<button class="submit" type="submit">Sign Up</button>
			</form>
		</div>
	</div>
	
	<hr>
	<div class="footer-end">
		<p>&copy 2024 Ben Kijuu Foundation. All rights reserved.</p>

		<p>
			<a href="/privacy-policy">Privacy Policy</a> | 
			<a href="/terms-of-service">Terms of Service</a>
		</p>
		
	</div>

</footer>

<style>
	footer{
		background-color: #1a5319;
	}

	.footer-section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		/* text-align: center; */
		padding: 30px 70px;
		margin-left: auto;
		margin-right: auto;
		background-color: #1a5319;
		color: #fff;
	}

	.logo{
		max-width: 65px;
	}

	.social{
		max-width: 30px;
	}

	.footer-section a{
		color:#fff;
	}

	form input[type=text] {
		width: 80%;
		height: 2.7rem;
		background-color: #1a5319;
		border: 1px solid #fff;
		color: #fff;
		padding: 0rem 0.8rem;
		font-size: 1.4rem;
		outline: none;
		transition: ease 0.3s;
	}

	form input[type=text]:focus {
		border: 1px solid #D6EFD8;
	}

	.submit {
		padding: 0.6rem;
		background-color: #D6EFD8;
		outline: none;
		border: 1px solid #D6EFD8;
		border-radius: 3rem;
		font-size: 1rem;

	}

	.submit:hover{
		cursor: pointer;
	}

	.footer-end{
		width: 90%;
		margin: 0 auto;
		color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 1rem 0rem;
	}

	hr{
		color: #fff;
		width: 90%;
		margin: 0 auto;
	}

	.footer-end a {
		color: #fff;
	}

	@media screen and (max-width: 600px) {
		.footer-section{
			display: block;
			padding: 20px 20px;
		}

		.footer-section h3{
			padding-top: 0px;
		}

		.contact{
			padding: 2rem 0rem;
		}

		.form{
			padding-bottom: 1rem;
		}

		.footer-end{
			display: block;
		}

		.footer-end p{
			padding-bottom: 0.5rem;
		}
	}
</style>
