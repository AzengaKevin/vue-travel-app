<script setup>
    defineProps({
        experience: Object
    })
</script>

<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" class="card-img-top" :alt="experience.name">
        <div class="card-body">
            <p class="card-text">{{ experience.name }}</p>
        </div>
    </div>
</template>