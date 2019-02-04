<template>
  <div class="Recommendation">

    <router-link :to="{ name: 'ArticleView', params: {id: article.uuid} }" class="article_recommendation">
      <img :src="image" />
      <br />
      {{article.headline}}
    </router-link>

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
    article: ""
  },
  computed: {
    image: function () {
      return this.article.image.length > 0 ? Functions.generateImageUrl(this.article.image[0]) : "/static/graphics/barometern-square.png";
    },
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  height: 100px;
}

</style>
