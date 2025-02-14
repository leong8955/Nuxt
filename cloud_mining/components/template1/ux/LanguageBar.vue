<script setup>
import { mapState } from "pinia";

const { locale, locales, setLocale } = useI18n();

const layoutStore = mapState(useLayoutStore, ["language"]);

const availableLocales = computed(() => {
  const result = locales.value.filter(x =>
    layoutStore.language().some(y => x.code.toLowerCase() === y.language.toLowerCase())
  );

  return result;
});

const currentLanguage = computed(() => {
  const result = locales.value.find(l => l.code === locale.value);
  return result;
});

const changeLocale = (code) => {
  setLocale(code);
  showDropdown.value = false;
};

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = (event) => {
  const button = document.getElementById('languageButton');
  const dropdown = document.getElementById('languageDropdown');
  
  if (dropdown) {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      showDropdown.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

// Remove event listener when the component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template lang="pug">
button#languageButton(@click = 'toggleDropdown')
  CommonUiTemplateImage(:item="currentLanguage.icon" :key="currentLanguage.icon" :flagStat="true" type="flag")
#languageDropdown(v-if="showDropdown" :class="{show : showDropdown}")
  ul
    li(v-for="item in availableLocales" :key="item.code" @click.prevent="changeLocale(item.code)")
      a
        CommonUiTemplateImage(:item="item.icon" :flagStat="true" type="flag")
        | {{ item.name }}
</template>

<style scoped>
/* Style for the language button */
#languageButton {
  display:flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;  
}

#languageButton img {
  margin-right: 2px; /* Space between the icon and the text */
  width: 30px;
}

/* Style for the language dropdown */
#languageDropdown {
  position: absolute;
  top: 46px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 8px 0;
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  margin-right: 5px;
}

#languageDropdown.show {
  opacity: 1;
  visibility: visible;
}

#languageDropdown ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#languageDropdown li {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#languageDropdown li:hover {
  background-color: transparent;
}

#languageDropdown li img {
  margin-right: 2px; /* Space between the icon and the text */
  width: 30px;
}

#languageDropdown li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

#languageDropdown li a:hover {
  color: #007bff;
}

</style>