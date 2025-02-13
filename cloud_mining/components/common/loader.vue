<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";
</script>

<template lang="pug">
.loader-container
  .loader
    .inner-circle
  .loader-text.d-flex.flex-column.align-items-center.justify-content-center
    .m-0.p-0.pe-0.pb-0.pb-1.ps-3
      span.caption {{ $t("loading") }}
      span.host {{ host().value }}
      span.dots
    .p-0.m-0(v-if="site.theme_code")
      span.title {{ site.theme_code }}
      span.title {{ site.theme_color }}
    .p-0.m-0(v-if="message")
      span.title {{ message }}
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["message", "site"]),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("/assets/css/loader.css");
</style>
