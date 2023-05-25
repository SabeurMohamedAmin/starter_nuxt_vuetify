<script setup>
import {computed} from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
const { params } = useRoute();
const courses = useCoursData(); 
const chapter =  computed( ()=>{
  return courses.chapters.find((chapter)=> chapter.slug === params.chapterSlug);
})
</script>

<template>
  <DefaultLayout>
    <h1>Home Page for Nuxt 3</h1>
    <h3>The Chapter is:  &lt;&lt; {{ chapter.title }} >></h3>
    <h3>The Lesson is:  &lt;&lt; {{ $route.params.lessonSlug }} >></h3>
    <h1>{{courses.title}}</h1>
    <ul>
      <li>
        <h2>{{chapter.title}}</h2>
        <ul>
          <li v-for="lesson in chapter.lessons" :key="lesson.slug">
            <h5>{{lesson.title}}</h5>
          </li>
        </ul>
      </li>
    </ul>
  </DefaultLayout>
</template>
