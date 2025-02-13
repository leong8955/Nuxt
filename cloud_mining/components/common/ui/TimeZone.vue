<script setup></script>

<template lang="pug">
.timezone
  if hasError
    i.fa.fa-spinner.fa-spin
  else
    | {{ countdown }}
</template>

<script>
export default {
  data() {
    return {
      countdown: "",
      counter: 0,
      intervalTime: 5000, // Interval time in milliseconds
      hasError: false, // Flag to track error state
    };
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  async mounted() {
    await this.getTimeZone();
  },
  methods: {
    async fetchTimeZone() {
      try {
        const data = await $fetch("/api/timezone", { method: "GET" });
        if (data.statusCode == 1) {
          return data.message;
        } else {
          return this.$dayjs().format("DD/MM/YYYY HH:mm:ss (Z)");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getTimeZone() {
      this.counter++;
      // console.log("Counter: ", this.counter);
      try {
        this.countdown = await this.fetchTimeZone();
        this.hasError = false; // Reset error flag on success
      } catch (error) {
        this.hasError = true; // Set error flag on failure
      }
      this.timeout = setTimeout(this.getTimeZone, this.intervalTime);
    },
  },
};
</script>
