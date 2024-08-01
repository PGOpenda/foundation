// @ts-ignore
export function intersectionObserver(node, options) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.dispatchEvent(new CustomEvent('intersecting', {
          detail: true
        }));
        // Unobserve the node after it becomes visible
        observer.unobserve(node);
      }
    });
  }, options);

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}