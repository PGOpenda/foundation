<script>
	// @ts-nocheck

	import { slide } from 'svelte/transition';

	export let faqs = [];

	let activeIndex = null;

	function toggleAnswer(index) {
		activeIndex = activeIndex === index ? null : index;
	}

	function handleKeydown(event, index) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleAnswer(index);
		}
	}
</script>

<div class="faq-container">
	<h1>Frequently Asked Questions</h1>

	{#each faqs as faq, index}
		<div class="faq-item">
			<button
				type="button"
				class="faq-question"
				class:active={activeIndex === index}
				on:click={() => toggleAnswer(index)}
				on:keydown={(event) => handleKeydown(event, index)}
				aria-expanded={activeIndex === index}
				aria-controls={`faq-answer-${index}`}
			>
				{faq.question}
			</button>
			{#if activeIndex === index}
				<div id={`faq-answer-${index}`} class="faq-answer" transition:slide>
					{faq.answer}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.faq-container {
		padding: 70px 100px;
		width: 80%;
		margin: 0 auto;
	}

	.faq-container h1 {
		text-align: center;
		margin-bottom: 40px;
	}

	.faq-item {
		border-bottom: 1px solid #000;
		padding: 10px 0;
		margin-bottom: 20px;
		overflow: hidden;
	}

	.faq-question {
		border: none;
		background-color: #d6efd8;
		text-align: left;
		width: 100%;
		padding: 10px;
		cursor: pointer;
		font-size: 1.3em;
		font-family: Montserrat;
	}

	.faq-answer {
		padding: 15px;
		font-size: 1.1em;
	}

	.faq-question::after {
		content: '\25BC';
		float: right;
		right: 10px;
		transition: transform 0.3s ease;
	}

	.faq-question.active::after {
		transform: rotate(180deg);
	}
</style>
