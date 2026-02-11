<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    viewBox="0 0 54 54" 
    fill="none"
  >
    <circle :cx="27" :cy="27" :r="27" :fill="color" />
    <path d="M39 27L21 37.3923L21 16.6077L39 27Z" fill="white" />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 54
  },
  height: {
    type: [Number, String],
    default: 54
  },
  color: {
    type: String,
    default: '#FF0000'
  }
})
</script>
