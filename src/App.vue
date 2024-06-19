<script setup></script>
<template>
  <div class="h-screen w-screen overflow-x-hidden">
    <nav>
      <div>
        <router-link to="/"></router-link>
        <router-link to="/table"></router-link>

        <router-view />
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
