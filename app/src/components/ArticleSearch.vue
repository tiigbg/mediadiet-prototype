<template>
  <div class="ArticleSearch">

    <div>
      <router-link :to="{ name: 'ArticleView', params: {id: article.uuid} }" >
        <img :src="img" class=""/>
        <br />
        {{article.headline}}
      </router-link>
      <br />
      <div class="preamble">
        {{article.preamble}}
      </div>
      <br />
    </div>

  </div>
</template>

<script>

import Functions from '@/components/Functions';

export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    article: "",
  },
  computed: {
    img: function (){
      return this.article.image.length ? Functions.generateImageUrl(this.article.image[0]) : "/static/graphics/barometern.png";
    }
  },
  watch: {
  },
  methods: {
  },
  created () {
  },
  mounted: function () {
    //this.handleScroll();
  },
  destroyed () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  width: 100%;
}

.preamble{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
}

</style>
