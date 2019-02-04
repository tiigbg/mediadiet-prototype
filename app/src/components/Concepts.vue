<template>
  <div class="Concepts">

    <concept :concept="concept" v-for="concept in concepts"></concept>

  </div>
</template>

<script>

import Concept from '@/components/Concept'

export default {
  components: {
    Concept
  },
  data () {
    return {
    }
  },
  props: {
    article: "",
  },
  computed: {
    concepts: function () {
      return this.article.concepts
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
