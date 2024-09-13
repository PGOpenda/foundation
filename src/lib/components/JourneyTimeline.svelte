<script>
    import { onMount } from 'svelte';
  
    // Sample timeline data
    const timelineEvents = [
      { date: '2020', title: 'Organization Founded', description: 'Our journey began...', side: 'left' },
      { date: '2021', title: 'First Major Project', description: 'We launched...', side: 'right' },
      { date: '2022', title: 'Milestone Achievement', description: 'We reached...', side: 'left' },
      { date: '2023', title: 'Expansion', description: 'Our team grew...', side: 'right' },
      { date: '2024', title: 'Future Plans', description: 'Looking ahead...', side: 'left' },
    ];
  
    // @ts-ignore
    let timelineElements;
  
    onMount(() => {
      timelineElements = document.querySelectorAll('.timeline-event');
      window.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    });
  
    function checkScroll() {
        // @ts-ignore
        timelineElements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible && !el.classList.contains('visible')) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200); // 200ms delay for each subsequent element
            }
        });
    }
</script>
  
<div class="timeline-container">
    <div class="timeline-line"></div>
    {#each timelineEvents as event, index}
      <div class="timeline-event {event.side}" style="top: {index * 200}px">
        <div class="timeline-date">{event.date}</div>
        <div class="timeline-content">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      </div>
    {/each}
</div>
  
<style>
    
    .timeline-container {
      position: relative;
      max-width: 800px;
      min-height: 1000px;
      margin: 50px auto;
      padding: 20px;
      background-color: #fff;
    }
  
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #ccc;
    }
  
    .timeline-event {
      position: absolute;
      width: 40%;
      opacity: 0;
      transform: translateY(20px);
     transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
  
    .timeline-event.visible {
      opacity: 1;
      transform: translateY(0);
    }
  
    .timeline-event.left {
      left: 5%;
    }
  
    .timeline-event.right {
      right: 5%;
    }
  
    .timeline-date {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #f0f0f0;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
    }
  
    .left .timeline-date {
      right: -70px;
    }
  
    .right .timeline-date {
      left: -70px;
    }
  
    .timeline-content {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .timeline-content h3 {
      margin-top: 0;
      font-size: 1.2em;
    }
  
    .timeline-content p {
      margin-bottom: 0;
      font-size: 0.9em;
    }
</style>