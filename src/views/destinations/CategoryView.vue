<script setup>
import { ref } from 'vue';

import desinationsData from '@/data.json';

const destinations = ref(desinationsData.destinations);

</script>
<template>
    <h1>Available Destinations</h1>

    <p class="lead">These are all the destinations contained in the
    <pre class="d-inline">data.json</pre> file. This should come from and API in a production application</p>

    <div class="row g-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <router-link v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destinations.detail', params: { slug: destination.slug } }" class="col text-decoration-none">
            <h2 class="h5">{{ destination.name }}</h2>
            <img :src="`/images/${destination.image}`" class="img-fluid" :alt="destination.name">
        </router-link>
    </div>

</template>