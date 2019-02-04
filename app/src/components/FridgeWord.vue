<template>
  <div class="FridgeWord" :style="{'transform': 'rotateZ('+rotation+'deg)'}">

    <span class="word" >
      {{word}}
    </span>

  </div>
</template>

<script>

import { store } from '@/store';

import ArticleSearch from '@/components/ArticleSearch'

export default {
  components: {
  },
  data () {
    return {
      rotation: ""
    }
  },
  props: {
    word: ""
  },
  computed: {
  },
  methods: {
    randomizeRotation: function () {
      this.rotation = Math.floor(Math.random() * 10) - 5;
    }
  },
  mounted: function () {
    this.randomizeRotation();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.FridgeWord{
  display: inline-block;
}

.word{
  background: rgb(250,250,250);
  border: 1px solid gray;
  box-shadow: 1px 1px 0px;
  margin: 5px;
  padding: 2px 5px 2px 5px;
  font-weight: 600;
}

</style>
