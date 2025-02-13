<script setup>
import { mapState, mapWritableState, mapActions } from "pinia";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter, useCookie } from "#app";
import { ref } from "vue";

const { t } = useI18n();

// const startup = useStartup();
// await startup.request();

const route = useRoute();
const router = useRouter();

const goToPrev = () => {
  const from = router.options.history.state?.back;

  if (from) {
      router.back();
  } else {
    router.replace("/")
  }
};
provide('goToPrev', goToPrev);

// const ip = ref("");

onMounted(async () => {

  // const setting = useSetting();
  // ip.value = await setting.getPublicIP();
  // console.log(ip.value.data)


  const isAdBlockerDetected = ref(false);
  const adScript = document.createElement('script');
  adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3681370535900773';
  adScript.async = true;
  adScript.crossOrigin = 'annoymous';

  adScript.onload = () => {
    // console.log('Google Ads script loaded successfully.');
  };

  adScript.onerror = (error) => {
    isAdBlockerDetected.value = true;
    console.log(error)
  };

  if (isAdBlockerDetected.value) {
    // console.log('Ad blocker detected.');
  } else {
    document.head.appendChild(adScript);
    // console.log('Google Ads script loaded.');
  }

});




</script>
<template lang="pug">
template(v-if="maintenance")
  template(v-if="maintenance.is_maintenance")
    NuxtLayout
  template(v-else)
    NuxtLayout(v-if="template" :name="template")
    NuxtLayout(v-else)
template(v-else)
  NuxtLayout
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["template", "maintenance", "site"]),
  },
  async mounted() {

  },
  methods: {
    ...mapActions(useLayoutStore, ["reset"]),
  },
}
</script>

<style scoped>
/* @import url("/public/xxx.css"); */

@import url("/assets/css/afterlogin.css");
</style>