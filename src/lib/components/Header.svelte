<script>
	import { onMount } from 'svelte';

	//Scrolling event listener
	let scrollY;
	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			isScrolled = scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	//Mobile nav view
	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}

	function closeNav(){
		isOpen = false;
	}

</script>

<header id="header" class:scrolled={isScrolled}>
	<a href="/">
		<img src="/Logo.png" alt="Ben Kijuu Foundation" />
	</a>

	<button class="nav-toggle" aria-label="Toggle navigation" on:click={toggleNav} >
		<span class="material-symbols-outlined">
			menu
		</span>
	</button>
	
	<nav class="nav-links-container" class:active={isOpen}>
		<button class="close-nav" on:click={toggleNav} aria-label="Close navigation">
			<span class="material-symbols-outlined">
				close
			</span>
		</button>
		<ul class="nav-links" class:active={isOpen}>
			<li><a href="/" on:click={closeNav}> Home </a></li>
			<li><a href="/about-us" on:click={closeNav}> Who We Are</a></li>
			<li><a href="/liver-cancer" on:click={closeNav}> About Liver Cancer</a></li>
			<li><a href="/our-journey" on:click={closeNav}>Our Journey</a></li>
			<li><a href="/events" on:click={closeNav}> Events</a></li>
			<li><a href="/merchandise" on:click={closeNav}>Merchandise</a></li>
			<li><a href="/donate" class="donate-btn" on:click={closeNav}> DONATE</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40px;
		z-index: 1000;
		transition: all 0.3s ease;
	}

	.nav-links {
		display: flex;
		list-style: none;
	}

	.nav-links li {
		padding: 0px 15px;
	}

	.nav-toggle{
		display: none;	
	}

	.close-nav{
		display: none;
	}

	nav a {
		font-size: 1em;
		font-weight: 500;
		color: #000;
		text-align: center;
		transition: ease 0.3s;
	}

	nav a:hover {
		color: #80af81;
		border-bottom: 1px solid #80af81;
	}

	.donate-btn {
		background-color: #1a5319;
		border: 1px solid #1a5319;
		color: #fff;
		padding: 1rem 2rem;
		border-radius: 28px;
		transition: ease 0.4s;
	}

	.donate-btn:hover {
		background-color: #80af81;
		border: 1px solid #80af81;
		color: black;
	}

	header.scrolled {
		background-color: white;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	/* Mobile design */
	@media screen and (max-width: 600px) {
		header{
			padding: 0 10px;

		}
		
		.nav-toggle {
			display: block;
			background: none;
			border: none;
			cursor: pointer;
			margin-right: 2em;
		}

		.nav-toggle span{
			font-size: 2.5em;
		}

		.nav-links-container {
			position: fixed;
			top: 0;
			right: 0;
			height: 100vh;
			width: 250px;
			background-color: #f8f8f8;
			padding: 2rem;
			transform: translateX(100%);
			transition: transform 0.3s ease-in-out;
		}

		.nav-links-container.active {
			transform: translateX(0);
		}

		.nav-links {
			flex-direction: column;
		}

		.nav-links li {
			margin: 1rem 0;
		}

		.close-nav {
			display: block;
			background: none;
			border: none;
			font-size: 1.5rem;
			cursor: pointer;
			position: absolute;
			top: 1rem;
			right: 1rem;
		}

		.close-nav span{
			font-size: 1.2em;
		}
	}

</style>