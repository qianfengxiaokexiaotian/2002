import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      detail: null
    };
  },
  methods: {
    addToCart: function (detail) {
      //启动actions
      //dispatch的第一个参数(action的名字)
      this.$store.dispatch("addToCartA", detail);
    }
  },
  mounted() {
    console.log(this);
    console.log(this.$route.params.fid);
    var id = this.$route.params.fid;
    axios.get(`/v4/api/film/${id}?__t=1534179512220`).then(res => {
      console.log(res);
      this.detail = res.data.data.film;
    });
  }
};
