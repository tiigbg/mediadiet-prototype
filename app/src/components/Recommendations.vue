<template>
  <div class="Recommendations">

    <recommendation v-for="r in recs" :article="r" class="recommendation" v-if=""></recommendation>

  </div>
</template>

<script>

import { store } from '@/store';

import Recommendation from '@/components/Recommendation'

export default {
  components: {
    Recommendation
  },
  data () {
    return {
      recs: ""
    }
  },
  props: {
    uuid: "",
  },
  computed: {
  },
  watch: {
    uuid: function () {
      this.getRecommendations();
    }
  },
  methods: {
    getRecommendations: function() {

      let data = {
        "uuid": this.uuid,
        "image": true,
        "headline": true,
        "preamble": true,
        "publicationTimestamp": true,
        "returnSize": 3
      }

      let params = {
        url: "https://gatemd1.imatrics.com/article/recommendations",
        data: data,
        successCallback: this.successCallback
      }
      store.commit('callApi',params);

    },
    successCallback: function (data) {
      console.log(data);
      this.recs = data.data;
    },
  },
  mounted: function () {
    this.getRecommendations();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Recommendations{
  display: flex;
  flex-direction: row;

  overflow-x: scroll;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 5px;
}

.recommendation {
  margin-right: 5px;
  flex: 1 0 100px;
}

</style>
