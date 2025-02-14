<script setup>
const is_client = ref(false);
onMounted(() => {
  is_client.value = true;
});
</script>

<template lang="pug">
Template1UxContentTop(title="about")

.content-page
  .content-info
    .info-content(v-if="$i18n.locale == cms?.local_lang" v-html="cms?.local_about_us_body")
    .info-content(v-else v-html="cms?.en_about_us_body")


Template1UxFooter

</template>

<script>
import { mapState } from "pinia";
import { useLayoutStore } from "@/stores/layout";

export default {
  computed: {
    ...mapState(useLayoutStore, ["cms"]),
  },
};
</script>
