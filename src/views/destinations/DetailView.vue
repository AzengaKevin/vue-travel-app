<script setup>
import { computed, onMounted } from 'vue';
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
            <router-link v-for="experience in destination.experiences" :key="experience.slug"
                class="col text-decoration-none"
                :to="{ name: 'experiences.detail', params: { slug: destination.slug, experienceSlug: experience.slug } }">
                <experience-card :experience="experience" />
            </router-link>
        </div>
    </section>

    <div id="experiences-modal" class="modal fade" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Top {{ destination.name }} Experiences</h5>
                    <button type="button" data-bs-dismiss="modal" class="btn-close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <router-view :key="$router.path" />
                </div>
            </div>
        </div>
    </div>
</template>