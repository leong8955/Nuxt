<script setup>
import { mapState, mapWritableState } from "pinia";

const route = useRoute();

function isActive(to) {
  return route.path === to;
}

onMounted(() => {

});
</script>

<template lang="pug">
//- .t-footer
//-   footer.footer-menu
//-     .footer-in
//-       ul
//-         li
//-           NuxtLink(to="/" :class="{ active: isActive('/') }")
//-             CommonUiTemplateImage(item="footer/ico-home.png", imgClass="img-fluid")
//-             | {{ $t('menu.home') }}
//-         li
//-           NuxtLink(to="/account" :class="{ active: isActive('/account') }")
//-             CommonUiTemplateImage(item="footer/ico-profile.png")
//-             | {{ $t('menu.account') }}
//-         li
//-           NuxtLink(to="/deposit" :class="{ active: isActive('/deposit') }")
//-             CommonUiTemplateImage(item="footer/ico-wallet.png", imgClass="img-fluid")
//-             | {{ $t('menu.wallet') }}
//-         li
//-           NuxtLink(to="/promotions" :class="{ active: isActive('/promotions') }")
//-             CommonUiTemplateImage(item="footer/ico-promo.png", imgClass="img-fluid")
//-             | {{ $t('menu.promotion') }}
//-         //- li
//-         //-   //- NuxtLink(to="/contact-us" @click.prevent="openContactModal" data-bs-target="#contactmodal" data-bs-toggle="modal")
//-         //-   NuxtLink(to="/contact-us" data-bs-target="#contactmodal" data-bs-toggle="modal")
//-         //-     CommonUiTemplateImage(item="footer/ico-chat.png", imgClass="img-fluid")
//-         //-     | {{ $t("contact") }}
//-         li
//-           NuxtLink(to="#" data-bs-toggle='modal' data-bs-target='#sideMenuModal')
//-             CommonUiTemplateImage(item="mobile/hamburger.png" imgClass="img-fluid" style='width:30px;height:30px;')
//-             | {{ $t('menu.menu') }}


footer.footer
  .footer-container
    template(v-for="item in footerList" :key="item.name")
      .footer-item
        NuxtLink(:to='item.url' :class="{ active: isActive('item.url') }")
          CommonUiTemplateImage(:item="item.icon", :imgClass="item.icon_class" :sharedOrCustomTemplate="false" :colorize="true" type="icon")
          span {{ $t(`menu.${item.name}`) }}

</template>

<script>
export default {
    computed: {
        ...mapState(useLayoutStore, ["site", "template", "content", "language"]),
        footerList () {
            return template1.menu;
        },
    },
    setup() {
        
    },
}
</script>


<style scoped>
.footer {
    background-color: #333;
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px 0;
    border-top: 1px solid #444;
}

/* Footer container default setup */
.footer-container {
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
}

/* Footer item styling */
.footer-item {
    text-align: center;
    padding: 8px 12px;
    border-radius: 10px;
    background-color: #555;
    border: 1px solid #444;
    margin: 0 5px;
    flex: 1;
    max-width: 120px; /* Ensure items don't stretch too far */
}

.footer-container .footer-item {
    flex: none;
    max-width: 200px; /* Larger item for 1 */
}

.footer a {
    color: white;
    text-decoration: none;
}

@media(max-width: 768px){
    .footer-container {
        flex-wrap: wrap; /* Allow wrapping of items */
        justify-content: space-around;
    }
}



</style>