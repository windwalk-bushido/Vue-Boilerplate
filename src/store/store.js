import defineStore from "pinia";

const SimpleStore = defineStore("simple", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default SimpleStore;
