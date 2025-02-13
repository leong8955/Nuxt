<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";

const props = defineProps({
  item: {
    type: String,
    required: true,
  },
  colorize: {
    type: Boolean,
    default: false,
    required: false,
  },
  imgClass: {
    type: String,
  },
  sharedOrCustomTemplate: {
    type: Boolean,
    default: true,
    required: false,
  },
  flagStat: {
    type: Boolean,
    default: false,
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
  }
});
const { item, colorize, sharedOrCustomTemplate, flagStat } = props;
const config = useRuntimeConfig();
const { template, site } = useLayoutStore();

const imageSrc = computed(() => {
  let src = "";
  

  if (flagStat) { 
    src = `${config.public.templateBase}/shared/images/flags/${item}`;
  } else {
    if (sharedOrCustomTemplate) {
      src = `${config.public.templateBase}/shared/images/${item}`;
    } else {
      if (colorize) {
        src = `${config.public.templateBase}/${template}/images/${site.theme_color}/${item}`;        
      } else {
        src = `${config.public.templateBase}/${template}/images/${item}`;
      }
    }
  }
  
  return src;
});

const fallbackUrl = computed(() => {
  let url = '';
  if (props.type === 'banner') {
    url = `${config.public.templateBase}/shared/images/banner/default.gif`;
  } else if (props.type === 'icon') {
    // url = `${config.public.templateBase}/shared/images/icon/default.gif`;
  } else if (props.type === 'flag') {
    url = `${config.public.templateBase}/shared/images/flags/default.png`;
  } else {
    // Default fallback if type is not matched
    // url = `${config.public.templateBase}/shared/images/default.gif`;
  }
  return url;

})

const handleImageError = (event) => {
  // event.target.src = fallbackUrl.value;
  // event.target.onerror = null;
};


</script>

<template lang="pug">
UnLazyImage(
  :src="imageSrc"
  :class="imgClass"
  auto-sizes
  preload
  loading="lazy"
  :placeholderSrc="fallbackUrl"
  @error="handleImageError"
)
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["template", "site"]),
  },
  data() {
    return {};
  },
  async mounted() {},
  methods: {},
};
</script>

<style></style>
