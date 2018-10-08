<template>
  <div>
    <div>
      <input v-model="newWord.word" placeholder="Add Word">
    </div>
    <div>
      <textarea v-model="newWord.definition" placeholder="Add definition here"></textarea>
    </div>
    <button @click="addWord">Add Word</button>
    {{this.$store.getters.words}}
  </div>
</template>

<script>
export default {
  name: 'WordInput',
  data() {
    return {
      newWord: {
        word: '',
        definition: '',
      },
    }
  },
  methods: {
    addWord() {
      this.$store.dispatch('addWord', this.newWord).then(() => {
        this.newWord.word = ''
        this.newWord.definition = ''
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
