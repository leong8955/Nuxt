<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";
</script>

<template lang="pug">
.wallet
  NuxtLink(to="/deposit")
    .w-menu
      CommonUiTemplateImage(item="acc/w-depo.png" type="icon")
      span {{ $t("menu.deposit") }}
  NuxtLink(to="/withdrawal")
    .w-menu
      CommonUiTemplateImage(item="acc/w-withdraw.png" type="icon")
      span {{ $t("menu.withdrawal") }}
  NuxtLink(to="/transaction-history")
    .w-menu
      CommonUiTemplateImage(item="acc/w-trans.png" type="icon")
      span {{ $t("menu.transaction_history") }}
  NuxtLink(to="/inbox")
    .w-menu
      CommonUiTemplateImage(item="acc/w-reward.png" type="icon")
      span {{ $t("menu.inbox") }}
  NuxtLink(to="/statement")
    .w-menu
      CommonUiTemplateImage(item="acc/w-history.png" type="icon")
      span {{ $t("menu.statement") }}
  NuxtLink(to="/bank-details")
    .w-menu
      CommonUiTemplateImage(item="acc/w-card.png" type="icon")
      span {{ $t("menu.banking_details") }} 
  NuxtLink(to="/promotions")
    .w-menu
      CommonUiTemplateImage(item="acc/w-promo.png" type="icon")
      span {{ $t("menu.promotion") }} 
  NuxtLink(to="/security")
    .w-menu
      CommonUiTemplateImage(item="acc/w-secure.png" type="icon")
      span {{ $t("menu.security") }} 
</template>


<script>
export default {
    
    data() {
        return {
            // Add your data here
        }
    },
    computed: {
        ...mapState(useLayoutStore, ['template']),
    },
    mounted() {
        // Add your mounted hook here
    },
    methods: {
        // Add your methods here
    }
}
</script>