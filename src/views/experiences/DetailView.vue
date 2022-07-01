<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json';

const route = useRoute()

const slug = computed(() => route.params.slug)
const experienceSlug = computed(() => route.params.experienceSlug)

const destination = computed(() => sourceData.destinations.find(dest => dest.slug === slug.value))

const experience = computed(() => destination.value.experiences.find(exp => exp.slug === experienceSlug.value))

</script>
<template>
    <h1>{{ experience.name }}</h1>
    <div class="row g-3 align-items-md-center">
        <div class="col-md-6">
            <img :src="`/images/${experience.image}`" class="w-100 img-thumbnail" :alt="experience.name">
        </div>
        <div class="col-md-6">
            <p class="text-muted">{{ experience.description }}</p>
        </div>
    </div>
</template>