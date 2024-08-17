<script>
  import { fly } from 'svelte/transition';
  import { popupStore } from '$stores/popupStore';

  export let message = '';

  function closePopup() {
    popupStore.set(false);
  }

</script>

{#if $popupStore}
  <div class="popup-overlay" transition:fly="{{ opacity: 0, duration: 300 }}">
    <div class="popup-content-wrapper">
      <dialog
        open
        class="popup-content"
        aria-modal="true"
      >
        <p>{message}</p>
        <button on:click={closePopup}>Close</button>
      </dialog>
    </div>
  </div>
{/if}

<style>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 1000;
  }

  .popup-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: none;
  }
</style>