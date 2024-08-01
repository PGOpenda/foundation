<script>
// @ts-nocheck

    import { slide } from 'svelte/transition';
    import { intersectionObserver } from '$lib/actions/intersectionObserver';
  
    export let duration = 1000;
    export let y = 800; //Distance to slide from (in pixels)
    
    let visible = false;
</script>
  
<div
    use:intersectionObserver
    on:intersecting={() => visible = true}
  >
    {#if visible}
      <div transition:slide={{ duration, y}}>
        <slot />
      </div>
    {/if}
</div>