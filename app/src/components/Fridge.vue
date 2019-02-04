<template>
  <div id="Fridge" class="">

    <div class="mainpadding">

      <div class="stickytop searchfield" >

        <h4>
          Skriv din kylskåpspoesi
        </h4>
        <form @submit.prevent>
          <input v-model="query" placeholder="Ange sökord"/>
          <button @click="setUrlQueryFromSearchQuery">Sök</button>
        </form>

        <div class="fridge" v-if="query">
          <fridge-word :word="word" class="fridgeWord" v-for="word in query.split(' ')">
            {{word}}
          </fridge-word>
        </div>

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
import FridgeWord from '@/components/FridgeWord'

export default {
  components: {
    ArticleSearch,
    FridgeWord
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
      this.$router.push({ name: 'Fridge', query: { s: this.query } })
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

</style>
