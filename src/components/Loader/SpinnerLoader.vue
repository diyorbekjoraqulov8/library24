<template>
<div class="loader" :style="`--b: ${b};--n:${n};--c:${c};width:${width};`"></div>
</template>

<script setup>
const props = defineProps({
  b: {
    type: String,
    default: "6px"
  }, // border thickness
  n: {
    type: String,
    default: "10"
  }, // number of dashes
  c: {
    type: String,
    default: "#000"
  }, // the color
  width: {
    type: String,
    default: '40px'
  }
})

</script>
<style lang="css">
.loader {
  --g: 10deg; /* gap  between dashes*/
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px; /* get rid of bad outlines */
  background: conic-gradient(#0000,var(--c)) content-box;
  --_m: /* we use +/-1deg between colors to avoid jagged edges */
    repeating-conic-gradient(#0000 0deg,
       #000 1deg calc(360deg/var(--n) - var(--g) - 1deg),
       #0000     calc(360deg/var(--n) - var(--g)) calc(360deg/var(--n))),
    radial-gradient(farthest-side,#0000 calc(98% - var(--b)),#000 calc(100% - var(--b)));
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: destination-in;
          mask-composite: intersect;
  animation: load 1s infinite steps(var(--n));
}
@keyframes load {to{transform: rotate(1turn)}}
</style>