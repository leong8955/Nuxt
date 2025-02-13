<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";

// const seo = useSeo();
// await seo.request("about");
</script>

<template lang="pug">
.pages
  CommonMaintenance(v-if="maintenance.is_maintenance")
  template(v-else)
    CommonLoader(v-if="!template")
    template(v-else)
        Template1About(v-if="template == 'template1'")
        //- Template2About(v-if="template == 'template2'")
        //- Template3About(v-if="template == 'template3'")
        //- Template4About(v-if="template == 'template4'")
        //- Template5About(v-if="template == 'template5'")
        //- Template6About(v-if="template == 'template6'")
        //- Template7About(v-if="template == 'template7'")
        //- Template8About(v-if="template == 'template8'")
        //- Template9About(v-if="template == 'template9'")
        //- Template10About(v-if="template == 'template10'")
        CommonComing(v-else)
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["template", "maintenance"]),
  },
};
</script>
