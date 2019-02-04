<template>
  <div class="ReadProgress">

    <div class="bar" :style="{'width': value*100+'%'}">

    </div>

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
    value: 0
  },
  computed: {
    percent: function () {

    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bar{
  height: 3px;
  background: dodgerblue;
}

</style>
