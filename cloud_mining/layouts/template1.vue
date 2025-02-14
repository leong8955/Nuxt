<script setup>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useLayoutStore } from "~/stores/layout";
const config = useRuntimeConfig();
// const is_client = ref(false);
// onMounted(async () => {
//   is_client.value = true;
// });
useHead({
  link: [




    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/style.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/responsive.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/after-login.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/set-1-1.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/set-1-2.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/set-1-3.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/set-1-4.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/set-1-5.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
    // {
    //   rel: `stylesheet`,
    //   href: `${config.public.templateBase}/template1/css/after-login.css?v=${config.public.version}`,
    //   tagPriority: 200,
    //   crossorigin: false,
    // },
  ],
});
</script>

<template lang="pug">
//- NuxtPage(v-if="is_client")
NuxtPage
</template>

<script>
export default {
  computed: {
    
  },
  mounted() {
    
  },
};
</script>

<style>
@import url("/assets/css/t1.css");

.pages { 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
