<script setup>
import { mapState } from "pinia";
// import { useUserStore } from "@/stores/user";
import { useLayoutStore } from "~/stores/layout";

// const seo = useSeo();
// await seo.request("register");

const is_client = ref(false);
onMounted(() => {
  is_client.value = true;
});

</script>

<template lang="pug">
.pages
  CommonMaintenance(v-if="maintenance.is_maintenance")
  template(v-else)
    CommonLoader(v-if="!template")
    template(v-else)
      Template1Register(v-if="template == 'template1'")
      //- Template2Login(v-if="template == 'template2'")
      CommonComing(v-else)
</template>

<script>
export default {
  computed: {
    // ...mapState(useUserStore, ["isAuthenticated", "user", "token"]),
    ...mapState(useLayoutStore, ["template", "maintenance"]),
  },
  mounted(){
    // if(!this.isAuthenticated){
    //   $("#annModal").modal('show');
    // }
  }
};
</script>
