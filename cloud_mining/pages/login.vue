<script setup>
import { mapState } from "pinia";
// import { useUserStore } from "@/stores/user";
// import { useLayoutStore } from "~/stores/layout";

// const seo = useSeo();
// await seo.request("Login");

// const is_client = ref(false);
// onMounted(() => {
//   is_client.value = true;
// });

</script>

<template lang="pug">
.pages
  CommonMaintenance(v-if="maintenance.is_maintenance")
  template(v-else)
    CommonLoader(v-if="!template")
    template(v-else)
      Template1Login(v-if="template == 'template1'")
      //-   Template2Login(v-else-if="template == 'template2'")
      //-   Template3Login(v-else-if="template == 'template3'")
      //-   Template4Login(v-else-if="template == 'template4'")
      //-   Template5Login(v-else-if="template == 'template5'")
      //-   Template6Login(v-else-if="template == 'template6'")
      //-   Template7Login(v-else-if="template == 'template7'")
      //-   Template8Login(v-else-if="template == 'template8'")
      //-   Template9Login(v-else-if="template == 'template9'")
      //-   Template10Login(v-else-if="template == 'template10'")
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
