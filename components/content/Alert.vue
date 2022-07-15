<template>
  <div :class="[type]">
    <Markdown unwrap="p" />
  </div>
</template>

<script setup>
defineProps(["type"]);
</script>

<style>
.warning {
  @apply bg-gray-200 rounded-xl p-4 my-3;
}
</style>
