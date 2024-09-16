<script>
  import { onMount } from 'svelte';
  import {fly} from 'svelte/transition';
  import {browser} from '$app/environment';
  export let show = false;

  onMount(() => {
  if (browser) {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setTimeout(() => {
        show = true;
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 800);
    }
  }
  });

  // onMount(() => {
  //   setTimeout(() => {
  //     show = true;
  //   }, 800); // Delay of 1 second before showing the pop-up
  // });

  function closePopUp() {
    show = false;
  }
</script>

{#if show}
  <div class="overlay" transition:fly={{y:50, duration:500}}>
    <div class="popup" transition:fly={{y:50, duration:500}}>
      <button class="close" on:click={closePopUp}>
        <span class="material-symbols-outlined">
          close
        </span>
      </button>
      <h2>DISCLAIMER!</h2>
      <p>
        The information provided on this page is for informational purposes only and is not intended as a substitute for professional
        medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any 
        questions you may have regarding a medical condition.
      </p>
    </div>
  </div>
 
{/if}

<style>
    .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .popup {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #1a5319;
    color: white;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 50%;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 2em;
    cursor: pointer;
    color: white;
  }

  .popup h2{
    margin-bottom: 0.2em;
  }

  /* Mobile styles */
  @media screen and (max-width: 600px) {
    .popup {
      width: 80%;
      bottom: 30%;
      right: 8%;
    }

  }
</style>