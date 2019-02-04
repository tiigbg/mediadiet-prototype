<template>
  <div class="ArticleFull">

    <div class=" stick">
      <div class="mainpadding">
        <h3 class="article_headline">
          {{article.headline}}
        </h3>
      </div>
      <read-progress :value="scroll" class="article_progress"></read-progress>
    </div>

    <img :src="img" class="article_image"/>
    <!--br />
    <a :href="img" target="_blank">(öppna bild i nytt fönster)</a-->

    <div class="mainpadding">

      <p class="article_preamble">
        {{article.preamble}}
      </p>

      <div v-for="b in article.body" class="article_body">
        <p>
          {{b}}
        </p>
      </div>
    </div>

  </div>
</template>

<script>

import Functions from '@/components/Functions';

import Concept from '@/components/Concept'
import ReadProgress from '@/components/ReadProgress'

export default {
  components: {
    Concept,
    ReadProgress
  },
  data () {
    return {
      scroll: 0
    }
  },
  props: {
    article: "",
    progressEl: ""
  },
  computed: {
    pEl: function () {
      return this.progressEl ? this.progressEl : this.$el;
    },
    img: function (){
      return this.article.image.length ? Functions.generateImageUrl(this.article.image[0]) : "/static/graphics/barometern.png";
    }

  },
  watch: {
    article: function () {
      //Wait one tick for layout update
      this.$nextTick(function () {
        this.handleScroll();
      })
    }
  },
  methods: {
    handleScroll: function () {
      //var top = this.pEl.offsetTop;
      //var height = this.pEl.offsetHeight;
      //var s = document.documentElement.scrollTop;
      //var p = (s - top) / (height - document.documentElement.clientHeight);

      var p = 0;
      if(this.pEl.getBoundingClientRect().bottom < document.documentElement.clientHeight){
        p = 1;
      }
      else{
        var top = this.pEl.getBoundingClientRect().top;
        var height = this.pEl.offsetHeight;
        p = -top / (height - document.documentElement.clientHeight);
      }

      //console.log(p)
      p = Math.max(0,p)
      p = Math.min(p,1)
      this.scroll = p;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function () {
    //this.handleScroll();
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  width: 100%;
}

.stick{
  position: sticky;
  top: 0;
  background: rgb(250,250,250);
  padding: 5px 0 0 0;
  border-top: 0px solid dodgerblue;
}

.article_headline{
  margin: 0px 0 5px 0;
}

.article_progress{

}

.preamble{
  font-weight: 500;
}

</style>
