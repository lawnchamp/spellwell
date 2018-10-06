<template>
  <div class="home">
    <SpellingInput/>
  </div>
</template>

<script>
// @ is an alias to /src
import SpellingInput from "@/components/SpellingInput.vue";

export default {
  name: "home",
  components: {
    SpellingInput
  }
};
</script>
