import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const CustomFontAwesomeIcon = {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '2x'
    }
  },
  setup(props, { attrs }) {
    return () => {
      return h(FontAwesomeIcon, {
        icon: props.icon,
        class: ['fa-icon', attrs.class],
        size: props.size,
      });
    };
  }
};

export default defineNuxtPlugin((nuxtApp) => {
    library.add(fas, far, fab);
    nuxtApp.vueApp.component('custom-font-awesome-icon', CustomFontAwesomeIcon);
});