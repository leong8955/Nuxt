<script setup>
import { mapState } from "pinia";
import { useLayoutStore } from "~/stores/layout";

</script>

<template lang="pug">
.card-border-animation-container(v-if="is_client")
  .card.card-border-animation
    h1.text-uppercase {{ $t("maintenance") }}
    .card
      p {{ maintenanceMessage }}
</template>

<script>
export default {
  computed: {
    ...mapState(useLayoutStore, ["maintenance"]),

    formattedStartTime() {
      const start = this.maintenance.start_date;
      return start ? new Date(start).toLocaleString() : new Date();
    },
    
    formattedEndTime() {
      const end = this.maintenance.end_date;
      return end ? new Date(end).toLocaleString() : new Date();
    },

    maintenanceMessage() {
      let { start_date, end_date } = this.maintenance;
      start_date = new Date().toLocaleString();
      end_date = new Date().toLocaleString();
      
      if (!start_date || !end_date) {
        return this.$t("msg.maintenance");
      }

      return this.$t("msg.maintenance_period", {
        startTime: this.formattedStartTime,
        endTime: this.formattedEndTime
      });
    },
  },
  data() {
    const is_client = false;
    return {
      is_client,
    };
  },
  mounted() {
    this.is_client = true;
  },
  methods: {},
};
</script>

<style scoped>
.card-border-animation-container {
  margin: 0;
  padding: 0;
  border: 0;
  color: #343438;
  align-content: center;
  width: 100dvw;
  height: 100dvh;
}
.card-border-animation h1 {
  color: #ff009588;
}
.card-border-animation .card {
  background: none;
  color: #ffffff33;
  display: flex;
}
.card-border-animation {
  margin: 0 auto;
  padding: 2em;
  width: 33%;
  background: #1c1f2b;
  text-align: center;
  border-radius: .4rem;
  position: relative;
  box-shadow: 0 0 3px #00000088;
  border: 1px solid #00000088;
}
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.card-border-animation::after,
.card-border-animation::before {
  content: "";
  position: absolute;
  height: calc(100% + .375rem);
  width: calc(100% + .375rem);
  background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  border-radius: .5rem;
  animation: 3s spin linear infinite;
  padding: 0;
  margin: 0;
  opacity: .5;
}
.card-border-animation::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}
@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
</style>
