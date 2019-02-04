<template>
  <div class="Concept">

    {{concept.conceptTitle}}

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    concept: ""
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Concept{
  background: dodgerblue;
  border-radius: 3px;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
  padding: 2px;
  font-size: smaller;
}

</style>
