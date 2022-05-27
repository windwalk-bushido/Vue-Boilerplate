<script>
  import Button from "./components/button.vue";

  export default {
    name: "App",

    components: {
      Button,
    },

    data() {
      return {
        message: "Hello World!",
        dark_mode_on: false,
      };
    },

    methods: {
      RenderMode() {
        if (
          localStorage.getItem("theme") === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          this.dark_mode_on = true;
        } else {
          document.documentElement.classList.remove("dark");
          this.dark_mode_on = false;
        }
      },

      ChangeMode() {
        this.dark_mode_on = !this.dark_mode_on;
        this.dark_mode_on ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
        this.RenderMode();
      },
    },

    mounted() {
      this.RenderMode();
    },
  };
</script>

<template>
  <div class="dark:bg-gray-900 dark:text-white">
    <h1 class="text-3xl">{{ message }}</h1>
    <Button @click="ChangeMode()" :dark_mode_on="dark_mode_on" />

    <nav class="text-xl mt-8 mb-8">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about" class="mr-4 ml-4">Go to About</router-link>
      <router-link to="/heheh">Test 404</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
