<!-- app/layouts/default.vue -->
<script setup lang="ts">
// Imports explícitos si necesitas algo aquí
</script>

<template>
  <div class="layout-default">
    <header class="header">
      <div class="container">
        <h1>IPICYT</h1>
        <!-- Tu navegación -->
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 IPICYT</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 0;
  }

  .main {
    flex: 1;
  }

  .footer {
    background-color: #34495e;
    color: white;
    padding: 2rem 0;
    text-align: center;
  }
}
</style>