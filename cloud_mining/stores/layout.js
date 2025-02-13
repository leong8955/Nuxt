import { defineStore, skipHydrate } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    message: null,
    template: null,
    template: "template1",
    maintenance: {
      is_maintenance: false,
      start_date: null,
      end_date: null,
    },
    language: 
    [
      {
        "language": "CN",
        "is_default": false
      },
      {
        "language": "EN",
        "is_default": true
      }
    ],

    content: [
      {
        "top": {

        },
        "side" : {

        },
        "bottom" : {

        },
      }
    ],
    // accountList: [],
    site: {
      site_name: null,
    //   currency: null,
      theme_code: "null",
      theme_color: "color1-1",
    //   logo1: null,
    //   logo2: null,
    //   logo3: null,
    //   status: null,
    //   expired_date: null,
    //   logo_text: null,
    //   external_id: null,
    //   android_sub: null,
    //   ios_sub: null
    },
    cms: {

      "en_about_us_body": "<p>raw html about us</p>\n",
      "local_about_us_body": "<p>Ini raw html tentang kami</p>\n",
      "about_us_status": true,
      "en_privacy_policy_body": "<p>raw privacy policy content</p>\n",
      "local_privacy_policy_body": "<p>隐私内容</p>\n",
      "privacy_policy_status": true,

      "en_faqs_body": "<p>Frequent Asked Questions</p>\n",
      "local_faqs_body": "<p>常问</p>\n",
      "faqs_status": true,
      
      "local_lang": "CN"

    },
    cms_status: false,
    // provider_count: []
  }),
  actions: {
    reset() {
      this.template = null;
      this.maintenance = {
        is_maintenance: false,
        start_date: null,
        end_date: null,
      };
      this.language = [];
      this.content = [];
      // this.accountList = [];
      this.site = {
        site_name: null,
      //   currency: null,
        theme_code: null,
        theme_color: null,
      //   logo1: null,
      //   logo2: null,
      //   logo3: null,
      //   status: null,
      //   expired_date: null,
      //   logo_text: null,
      //   external_id: null,
      //   android_sub: null,
      //   ios_sub: null
      };
      this.cms = {};
      this.cms_status = false;
      // this.provider_count= [];
    },
  },
  getters: {},
  persist: true,
});
