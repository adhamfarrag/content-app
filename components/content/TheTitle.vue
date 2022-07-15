<template>
  <div class="text-4xl">
    <p class="text-4xl">
      <Markdown unwrap="p" /> <br>
      <span class=" text-lg"> Written By: {{ author }}</span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  author: {
    type: String,
    default: 'Anonymous',
  },
  subtitle: {
    type: String,
    default: 'Anonymous',
  },
})
</script>
