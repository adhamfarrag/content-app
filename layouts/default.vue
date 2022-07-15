<template>
  <div>
    <div class=" flex flex-row items-center mt-3 mb-3  justify-center space-x-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
    <hr />
    <slot />
  </div>
</template>
