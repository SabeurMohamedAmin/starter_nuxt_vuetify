<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <h1>Home Page for Nuxt 3</h1>
    <h3>The Chapter is:  &lt;&lt; {{ $route.params.chapterSlug }} >></h3>
    <h3>The Lesson is:  &lt;&lt; {{ $route.params.lessonSlug }} >></h3>
  </DefaultLayout>
</template>
