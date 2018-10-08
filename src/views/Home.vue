<template>
  <div class="home">
    <WordInput/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'

export default {
  name: 'home',
  components: {
    WordInput,
  },
}
</script>
