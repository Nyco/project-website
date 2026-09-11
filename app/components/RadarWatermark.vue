<template>
  <svg class="radar-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- Grid  lines -->
    <path class="radar-line" d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" fill="none" />
    <path class="radar-line" d="M100 46 L143 71 L143 129 L100 154 L57 129 L57 71 Z" fill="none" />
    <path class="radar-line" d="M100 73 L117 83 L117 117 L100 127 L83 117 L83 83 Z" fill="none" />
    
    <!-- Axes -->
    <line x1="100" y1="20" x2="100" y2="180" class="radar-line" />
    <line x1="30" y1="60" x2="170" y2="140" class="radar-line" />
    <line x1="30" y1="140" x2="170" y2="60" class="radar-line" />

    <!-- Comparison polygons -->
    <path d="M100 33 L157 66 L130 123 L100 127 L70 123 L57 71 Z" class="radar-poly-1" />
    <path d="M100 46 L143 71 L143 129 L100 154 L57 129 L83 83 Z" class="radar-poly-2" />
  </svg>
</template>

<style scoped>
.radar-watermark {
  width: 100%;
  height: 100%;
  stroke: var(--watermark-color);
  stroke-width: 0.8;
  opacity: var(--watermark-opacity);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
}

.radar-poly-1 {
  fill: none;
  stroke: var(--color-software1);
  stroke-width: 2;
  opacity: 0.9;
}

.radar-poly-2 {
  fill: none;
  stroke: var(--color-software2);
  stroke-width: 2;
  opacity: 0.9;
}
</style>
