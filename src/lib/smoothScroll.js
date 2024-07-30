// @ts-nocheck
// src/lib/smoothScroll.js

export function smoothScroll(node, options = {}) {
    const { duration = 800 } = options;
  
    node.addEventListener('click', handleClick);
  
    function handleClick(event) {
      event.preventDefault();
      const href = node.getAttribute('href');
      const target = document.querySelector(href);
      
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
  
        requestAnimationFrame(animation);
      }
    }
  
    return {
      destroy() {
        node.removeEventListener('click', handleClick);
      }
    };
}