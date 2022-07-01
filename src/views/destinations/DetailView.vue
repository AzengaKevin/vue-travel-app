<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';

const route = useRoute()

const slug = computed(() => route.params.slug)

const destination = computed(() => sourceData.destinations.find(dest => dest.slug === slug.value))

</script>
<template>
    <h1>{{ destination.name }}</h1>
    <div class="row g-3 align-items-md-center">
        <div class="col-md-6">
            <img :src="`/images/${destination.image}`" class="w-100 img-thumbnail" :alt="destination.name">
        </div>
        <div class="col-md-6">
            <p class="text-muted">{{ destination.description }}</p>
        </div>
    </div>
    <section class="mt-4">
        <h2>Top Experiences In {{ destination.name }}</h2>
        <div class="row g-2 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div v-for="experience in destination.experiences" :key="experience.slug" class="col">
                <experience-card :experience="experience" />
            </div>
        </div>
    </section>
</template>