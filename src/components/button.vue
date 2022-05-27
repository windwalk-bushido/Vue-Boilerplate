<script>
  export default {
    name: "ModeButton",

    props: {
      dark_mode_on: Boolean,
    },
  };
</script>

<template>
  <button v-if="dark_mode_on === true">
    <Icon icon="sun" />
  </button>
  <button v-else>
    <Icon icon="moon" />
  </button>
</template>
