<template>
  <div class="ArticleView">

    <article-view></article-view>
    <article-view></article-view>

  </div>
</template>

<script>

import Factory from '@/components/Factory';

import ArticleView from '@/components/ArticleView'

export default {
  components: {
    ArticleView,
  },
  data () {
    return {
    }
  },
  props: {
    article: ""
  },
  computed: {
    articleRender: function () {
      return this.article ? this.article : Factory.Article();
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

</style>
