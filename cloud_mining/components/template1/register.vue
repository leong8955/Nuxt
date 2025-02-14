<template lang="pug">
  .content-wrapper
    .content-body
      .container
        .login-wrapper
          .pic-login
            CommonUiTemplateImage(item="login-banner-mobile.jpg", :colorize="true" imgClass="img-fluid")
          .pic-login-desktop
            CommonUiTemplateImage(item="login-banner.jpg", :colorize="true" imgClass="img-fluid")
          .login-form
            template(v-if="is_client && !showLogoutCom")
              Form(@submit="onSubmit" ref="loginForm")
                .login-form-title {{ $t("login") }}
                .login-field
                  .form-label {{ $t("username") }}
                  .input-group
                    Field(name="username" type="text" :rules="validateUsername").form-control
                  ErrorMessage(name="username").error
                .login-field(v-if="!loginWithTac")
                  .form-label {{ $t("password") }}
                  .input-group
                    Field(name="password" type="password" autocomplete="false" :rules="validatePassword").form-control
                  ErrorMessage(name="password").error
                .login-field(v-if="loginWithTac")
                  .form-label {{ $t("smsTacCode") }}
                  Field(name="tac" validateOnInput=true v-slot="{ field, meta, errorMessage }")
                    .input-group
                      input(type="number" v-bind="field").form-control
                      button.btn.btn-main.rounded.text-white.ms-2.h-100(type="button" @click.prevent="renewTimeRemaining > 0 ? $event.preventDefault() : onRequestLoginTac()") {{ renewTimeRemaining > 0 ? formattedTime : $t("send") }}
                .forgot-wrapper
                  NuxtLink(to="/forgot-password") {{ $t("forgotPassword") }}
                .forgot-wrapper
                  a(href="javascript:void(0);" @click="loginWithTac = !loginWithTac") {{ loginWithTac ? $t("loginWithPassword") : $t("loginWithTac")}}
                .login-form-btn
                  CommonUiTemplateButton(:buttonText="$t('login')" :fetchState="fetchState").btn-sub
            template(v-if="is_client && showLogoutCom")
              Form(@submit="logout" ref="logoutForm")
                .login-form-title {{ $t("logout") }}
                .login-field
                  .form-label {{ $t("username") }}
                  .input-group
                    input.form-control(type='text' :value="user.account_id" disabled)
                .login-field
                  .form-label {{ $t("lastLoginIP") }}
                  .input-group
                    input.form-control(type='text' :value="user.last_login_ip" disabled)
                .login-field
                  .form-label {{ $t("lastLoginTime") }}
                  .input-group
                    input.form-control(type='text' :value="$dayjs(user.last_login_time).format('DD/MM/YYYY HH:mm:ss A')" disabled)
                .login-form-btn
                  CommonUiTemplateButton(:buttonText="$t('logout')").btn-sub
      Template1UxHomeFooter
  
    
  custom-font-awesome-icon(icon="fa-arrow-left" @click="goToPrev")

  NuxtLink(to="/login")
    .btn.btn-primary.btn-login {{ $t('login') }}
  NuxtLink(to="/register") 
    .btn.btn-warning.btn-register {{ $t("register") }}
  NuxtLink(to="/")
    custom-font-awesome-icon(icon="fa-home")

  </template>
  
  <script>
  import { inject } from 'vue';
  import { mapState, mapActions } from "pinia";
  // import { useUserStore } from "@/stores/user";
  
  export default {
    setup() {
      const is_client = ref(false);
      const fetchState = useState("fetchState", () => false);
      const showLogoutCom = ref(false);
      const goToPrev = inject('goToPrev');
  
      return {
        is_client,
        fetchState,
        showLogoutCom,
        goToPrev
      };
    },
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    computed: {
      // ...mapState(useUserStore, ["isAuthenticated", "user"]),
      formattedTime() {
        const minutes = Math.floor(this.renewTimeRemaining / 60);
        const seconds = this.renewTimeRemaining % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      },
    },
    data() {
      return {
        renewTimeInterval: null,
        renewTimeRemaining: 0,
        loginWithTac: false,
      };
    },
    mounted() {
      this.is_client = true;
      
      if(this.isAuthenticated){
        this.showLogoutCom = true;
      }
    },
    methods: {
      // ...mapActions(useUserStore, ["reset"]),
      async onSubmit(values) {
        const auth = useAuth();
        const credentials = {
          account_id: values.username,
          ...(this.loginWithTac ? { tac: values.tac } : { password: values.password }),
        };
  
        this.fetchState = true;
        const result = this.loginWithTac ? await auth.loginTac(credentials) : await auth.login(credentials);
        this.fetchState = false;
  
        if (result.statusCode === 1) {
          navigateTo("/");
          $("#annModal").modal('show');
        } else {
          this.$handleLoginError({
            statusCode: result.statusCode,
            statusMessage: result.statusMessage,
          }).then(() => {
            if (result.statusCode === 313) {
              const registerStore = useRegisterStore();
              registerStore.tacNoValidate.account_id = values.username;
              registerStore.tacNoValidate.password = values.password;
              navigateTo({ path: "/register" });
            }
          });
        }
      },
      async onRequestLoginTac() {
        const isValid = await this.$refs.loginForm.validate();
        if (isValid.valid) {
          const req = {
            account_id: this.$refs.loginForm.values.username,
          };
  
          const auth = useAuth();
          const result = await auth.requestLoginTac(req);
  
          if (result.statusCode == 1) {
            this.startTimer();
  
            // success
            this.$swal.fire({
              title: "Success!",
              text: this.$t(result.statusMessage),
              icon: "success",
            });
          } else {
            // failed
            this.$handleError({
              statusCode: result.statusCode,
              statusMessage: result.statusMessage,
            });
          }
        }
      },
      validateUsername(value) {
        // if the field is empty
        if (!value) {
          return this.$t("required", { field: this.$t("username") });
        }
        // if the field is not a valid email
        // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        // if (!regex.test(value)) {
        //   return "This field must be a valid email";
        // }
        // All is good
        return true;
      },
      validatePassword(value) {
        // if the field is empty
        if (!value && !this.loginWithTac) {
          return this.$t("required", { field: this.$t("password") });
        }
        // if the field is not a valid email
        // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        // if (!regex.test(value)) {
        //   return "This field must be a valid email";
        // }
        // All is good
        return true;
      },
      validatetac(value) {
        // if the field is empty
        if (!value && this.loginWithTac) {
          return this.$t("required", { field: this.$t("smsTacCode") });
        }
      },
      startTimer() {
        this.renewTimeRemaining = 180;
  
        if (this.renewTimeInterval) {
          clearInterval(this.renewTimeInterval); // Clear the existing interval)
        }
  
        this.renewTimeInterval = setInterval(() => {
          if (this.renewTimeRemaining > 0) {
            this.renewTimeRemaining--;
          } else {
            clearInterval(this.renewTimeInterval); // Clear the interval when the countdown reaches 0
          }
        }, 1000);
      },
      logout() {
        this.reset();
      },
    },
  };
  </script>
  