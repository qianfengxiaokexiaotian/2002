<template>
  <div class="films">
    <span>{{$store.state.username}}</span>
    <ul>
        <li v-for="item in films" :key="item.id" @click="gotoDetail(item.id)">
          <!-- <router-link :to="{name:'Detail',params:{fid:item.id}}">
               <img :src="item.cover.origin"/>
          </router-link> -->
            <img :src="item.cover.origin"/>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Films",
  data() {
    return {
      films: []
    };
  },
  methods: {
    gotoDetail(id) {
      console.log(this);
      this.$router.history.push({ name: "Detail", params: { fid: id } });
    }
  },
  mounted() {
    axios
      .get("/v4/api/film/now-playing?__t=1534148493384&page=1&count=5")
      .then(res => {
        console.log(res);
        this.films = res.data.data.films;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.films {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}
ul {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
ul > li {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
ul > li > img {
  width: 100%;
  height: 100%;
}
ul > li > a {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>