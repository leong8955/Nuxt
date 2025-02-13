<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template lang="pug">
.cover-container.d-flex.h-100.p-3.mx-auto.flex-column.text-center.error-page
  header.masthead.mb-auto
  main.inner.cover(role="main")
    h1.cover-heading {{ error.statusCode }}
    p.lead {{ error.message }}
  footer.mastfoot.mt-auto
    .inner
      NuxtLink.btn.btn-lg.btn-secondary(to="/") Back
</template>

<style scoped>
.error-page {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh !important;
  background: #333;
}
.error-page h1 {
  font-size: 3rem;
  font-weight: bold;
}
.error-page .lead {
  color: #ffffff88;
}
</style>
