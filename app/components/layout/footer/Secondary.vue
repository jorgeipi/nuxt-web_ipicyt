<!-- components/layout/footers/FooterSecondary.vue -->
<template>
  <footer class="footer-secondary">
    <div class="container">
      <div class="footer-secondary__content">
        <p>&copy; 2025 IPICYT. Todos los derechos reservados.</p>
        <div class="footer-secondary__links">
          <NuxtLink to="/privacidad">Aviso de Privacidad</NuxtLink>
          <NuxtLink to="/terminos">Términos y Condiciones</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-secondary {
  background: var(--color-footer-red);
  color: var(--white);
  padding: 1.5rem 0;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  &__links {
    display: flex;
    gap: 1.5rem;

    a {
      color: var(--white);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>