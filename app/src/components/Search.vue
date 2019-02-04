<template>
  <div id="Search" class="">

    <div class="mainpadding">

      <div class="stickytop searchfield" >

        <h4>
          Sök artiklar
        </h4>
        <form @submit.prevent>
          <input v-model="query" placeholder="Ange sökord"/>
          <button @click="setUrlQueryFromSearchQuery">Sök</button>
        </form>

      </div>

      <h4>
        Sökresultat
      </h4>

      <ArticleSearch :article="article" v-for="article in articles.data"></ArticleSearch>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';

import ArticleSearch from '@/components/ArticleSearch'

export default {
  components: {
    ArticleSearch
  },
  data () {
    return {
      query: "",
      articles: "",
      recs: ""
    }
  },
  computed: {
    headers: function () {
      let user = "mediadiet";
  	  let key = "bret5cise7achaxoR@0u$iSTLTiV";
      return {
        "Authorization": 'Basic ' + btoa(user+':'+key)
      }
    },
    queryUrl: function (){
      return this.$route.query.s;
    }
  },
  watch: {
    queryUrl: function () {
      this.setSearchQueryFromUrlQuery()
    }
  },
  methods: {
    setUrlQueryFromSearchQuery: function (){
      this.$router.push({ name: 'Search', query: { s: this.query } })
      //this.searchArticles();
    },
    setSearchQueryFromUrlQuery: function (){
      this.query = this.queryUrl;
      this.searchArticles();
    },
    searchArticles: function() {

      let data = {
        "query": this.query,
        "returnSize": 5,
        "data": ["image", "headline", "preamble", "publicationTimestamp"]
      }

      let params = {
        url: "https://gatemd1.imatrics.com/mediadiet/article/search",
        data: data,
        successCallback: this.successCallback
      }
      store.commit('callApi',params);

    },
    successCallback: function (data) {
      console.log(data);
      this.articles = data;
    },
  },
  mounted: function () {
    this.setSearchQueryFromUrlQuery()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.searchfield{
  background: white;
  padding-top: 5px;
  padding-bottom: 15px;
}

h4{
  margin: 1em 0 0em 0;
}

.a{

}

.article{
}

.recommend{
  cursor: pointer;
  font-size: smaller;
  color: gray;
}

.recommend:hover{
  text-decoration: underline;
}

.fridge{
  margin: 10px;
}


.fridgeWord{
  display: inline;
  background: rgb(250,250,250);
  border: 1px solid gray;
  box-shadow: 1px 1px 0px;
  margin: 5px;
  padding: 2px 5px 2px 5px;
  font-weight: 600;
  transform: rotateZ(5deg);
}

</style>
