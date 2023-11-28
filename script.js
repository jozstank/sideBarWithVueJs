const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      leftPosition: "-200px",
      showNhide: "block",
    };
  },

  methods: {
    openMenu() {
      this.leftPosition = "0";
      this.showNhide = "none";
    },

    closeMenu() {
      this.leftPosition = "-200px";
      this.showNhide = "block";
    },
  },
});

app.mount("#app");
