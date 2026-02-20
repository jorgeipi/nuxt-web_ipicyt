<!-- components/layout/footers/FooterPrimary.vue -->
<template>
  <footer class="footer-primary">
    <div class="container">
      <div class="footer-primary__content">
        <!-- Columnas de enlaces -->
        <div class="footer-primary__column">
          <h3>Investigación</h3>
          <ul>
            <li><NuxtLink to="/investigacion">Divisiones</NuxtLink></li>
            <li><NuxtLink to="/laboratorios">Laboratorios</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-primary__column">
          <h3>Posgrado</h3>
          <ul>
            <li><NuxtLink to="/posgrado">Programas</NuxtLink></li>
            <li><NuxtLink to="/convocatorias">Convocatorias</NuxtLink></li>
          </ul>
        </div>

        <!-- Más columnas... -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-primary {
  background: var(--color-footer-red);
  color: var(--white);
  padding: 3rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  &__column {
    h3 {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
      }

      a {
        color: var(--white);
        text-decoration: none;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>