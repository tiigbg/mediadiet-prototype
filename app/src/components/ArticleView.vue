<template>
  <div class="ArticleView">

    <div v-if="article">
      <article-full :article="article"></article-full>

      <h4 class="header mainpadding">
        Ämnen i artikeln
      </h4>
      <concepts :article="article" class="mainpadding"></concepts>
    </div>

    <h4 class="header mainpadding">
      Relaterade artiklar
    </h4>
    <recommendations :uuid="uuid" class="mainpadding recs"></recommendations>

  </div>
</template>

<script>

import { store } from '@/store';
import Factory from '@/components/Factory';


import ArticleFull from '@/components/ArticleFull'
import Concepts from '@/components/Concepts'
import Recommendations from '@/components/Recommendations'

export default {
  components: {
    ArticleFull,
    Concepts,
    Recommendations
  },
  data () {
    return {
      progressEl: "",
      article: ""
    }
  },
  props: {
  },
  computed: {
    articleRender: function () {
      return this.article;// ? this.article : Factory.Article();
    },
    uuid: function () {
      return this.$route.params.id;
    }
  },
  watch: {
    uuid: function () {
      this.getArticleFromParam();
    }
  },
  methods: {
    getArticleFromParam: function (){
      if(this.uuid){

        let data = {
          "query": this.uuid,
          "returnSize": 1,
          "data": ["image", "headline", "dateline", "preamble", "publicationTimestamp", "body", "concepts", "newspaper", "channel", "author"]
        }

        let params = {
          //url: "https://gatemd1.imatrics.com/mediadiet/search",
          url: "https://gatemd1.imatrics.com/mediadiet/article/search",
          data: data,
          successCallback: this.successCallback
        }
        store.commit('callApi',params);
      }

    },
    successCallback: function (data) {
      console.log(data);
      this.article = data.data[0];
    },
  },
  mounted: function () {
    this.getArticleFromParam();
    this.progressEl = this.$el;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ArticleView{
  padding-bottom: 10px;
  border-bottom: 5px solid dodgerblue;
}

.recs{
}

</style>
