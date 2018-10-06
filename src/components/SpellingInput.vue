<template>
  <div class="text-sm hello">
    <input v-model="newSpellingWord" placeholder="Add Spelling Word">
    <p>new word: {{newSpellingWord}}</p>
  </div>
</template>

<script>
export default {
  name: "SpellingInput",
  data() {
    return {
      newSpellingWord: ""
    };
  }
};
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
