<footer>
	<div class="footer-section">
		<div>
			<a href="/">
				<img src="/Logo-2.png" alt="Ben Kijuu Foundation" class="logo"/>
			</a>
			<h3>Ben Kijuu Foundation &copy;</h3>

			<img src="/facebook.svg" alt="Facebook"class="social">
			<img src="/instagram.svg" alt="Instagram"class="social">
			<img src="/linkedin.svg" alt="LinkedIn"class="social">
			<img src="/twitter.svg" alt="X"class="social">	

			<p>
				<a href="/privacy-policy">Privacy Policy</a>
				<a href="/terms-of-service">Terms of Service</a>
			</p>
		</div>
		<div>
			<p>
				Don't feel shy, reach out <br /><br />
				<a href="/contact" class="contact-btn">Drop a message</a>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: center;
		padding: 30px 0px;
		margin-left: auto;
		margin-right: auto;
		background-color: #1a5319;
	}

	.footer-section h3 {
		color: #fff;
	}

	.logo{
		max-width: 48px;
	}

	.social{
		max-width: 30px;
	}

	.footer-section a{
		color:#fff;
	}

	.footer-section p {
		padding-top: 0px;
	}

	.contact-btn {
		background-color: #1a5319;
		border: 1px solid #1a5319;
		color: #fff;
		padding: 12px;
		border-radius: 25px;
	}

	.contact-btn:hover {
		background-color: #80af81;
		border: 1px solid #80af81;
		color: black;
		transition: 500ms;
	}

	@media screen and (max-width: 600px) {
		.footer-section{
			display: block;
			padding: 30px 0;
		}

		.footer-section h3{
			padding-top: 0px;
		}
	}
</style>
