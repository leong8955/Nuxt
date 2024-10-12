<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";
</script>

<template lang="pug">
.card-border-animation-container
  .card.card-border-animation
    h1.text-uppercase {{ $t("comingsoon") }}
    .card
      p {{ $t("msg.comingsoon") }}
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["theme"]),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.card-border-animation-container {
  margin: 0;
  padding: 0;
  border: 0;
  color: #a2a5b3;
  background-size: cover;
  align-content: center;
  width: 100svw;
  height: 100svh;
}

/* Tablet width : 768 px */
@media (max-width: 768px) {
  .card-border-animation-container {
    background-size: cover;
  }
}

.card-border-animation h1 {
  color: #ff009588;
}
.card-border-animation .card {
  background: none;
  color: #ffffff33;
  display: flex;
}
.card-border-animation {
  margin: 0 auto;
  padding: 2em;
  width: 60%;
  background: #1c1f2b;
  text-align: center;
  border-radius: .4rem;
  position: relative;
  box-shadow: 0 0 3px #00000088;
  border: 1px solid #00000088;
  @media(min-width:1200px){
    width: 33%;
  }
}
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.card-border-animation::after,
.card-border-animation::before {
  content: "";
  position: absolute;
  height: calc(100% + .375rem);
  width: calc(100% + .375rem);
  background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  border-radius: .5rem;
  animation: 3s spin linear infinite;
  padding: 0;
  margin: 0;
  opacity: .5;
}
.card-border-animation::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}
@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
</style>
