<script setup>
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">Vue Travel App</router-link>
        <button type="button" data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#global-navigation"
          aria-controls="global-navigation" aria-expanded="false" aria-label="Toggle Navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-navigation" class="navbar-collapse collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/destinations" class="nav-link">Destinations</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container py-3">
    <router-view></router-view>
  </div>
</template>