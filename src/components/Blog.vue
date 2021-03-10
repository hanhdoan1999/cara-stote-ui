<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor"/>  
      <div class="loader"></div>        
      <div class="mt-20">
        <div class="relative">
          <h1
            class="w-full h-full absolute flex items-center justify-center font-bold  xs:text-2xl md:text-6xl tracking-normal text-white capitalize "
          >
            Blog
          </h1>
          <img src="../assets/images/bg-02.jpg" alt="Content" class="lg:h-full xs:h-auto" />
        </div>

        <div class="md:my-16 md:mx-20 xs:my-8 xs:mx-10 grid md:grid-cols-3 xs:grid-cols-1">
          <div class="col-span-2">
            <div class="w-full md:mb-20 xs:mb-8" v-for="blog in blogs" :key="blog.id">

                <div class="parent">
                    <div class="z-10 absolute flex items-start justify-start w-full h-full">
                        <div class=" mt-3 ml-2 md:w-20 md:h-20 xs:w-16 xs:h-16 bg-date p-2 text-center">
                                <h1 class="font-bold text-grayter md:text-3xl xs:text-md">22</h1>
                                <p class="xs:text-xs md:text-sm text-grayter">Jan 2021</p>
                        </div>
                    </div>
                    <div class="child">
                       <img :src="getImgUrl(blog.src)" alt="Blog" class="w-full h-full" />
                    </div>
                </div>
      
              <h1
                class=" font-bold tracking-tight md:text-3xl xs:text-lg text-grayter md:my-3 xs:my-1 hover:text-purple"
              >
                <router-link to="/blog-detail">{{ blog.title }}</router-link>
              </h1>
              <p class="font-normal text-md text-gray md:mb-4 xs:mb-1 truncate">
                {{ blog.des }}
              </p>
              <div class="flex md:items-center justify-between md:flex-row xs:flex-col xs:items-start">
                <p class="text-sm text-grayter">
                  <strong class="text-gray font-normal">By</strong> Admin | StreetStyle,
                  Fashion, Couple | 8 Comments
                </p>
                <button class="focus:outline-none group hover:text-purple">
                <a
                  href=""
                  class=" font-semibold md:text-lg xs:text-md text-black group-hover:text-purple"
                  >CONTINUE READING
                </a>
                <span class="material-icons ml-2 align-bottom">trending_flat</span>
                </button>
              </div>
            </div>
            <div class="flex items-start justify-start">
              <button class="rounded-full w-9 h-9 p-1 text-md text-white bg-gray mr-3">1</button>
              <button class="rounded-full w-9 h-9 p-1  text-md text-gray border border-gray  bg-white hover:text-white hover:bg-gray">2</button>
            </div>
          </div>
          <!-- side blog -->
            <side-blog/>
        </div>
      </div>
      <Footer />
    </div>
  </div>

</template>
<script>
import $ from 'jquery'
import Footer from "./Footer";
import Header from "./Header";
import SideBlog from './SideBlog.vue';
export default {

  mounted: function(){
    this.$nextTick(this.getUnits)
  },
  components: {
    SideBlog,
    Footer,
    Header,
  },
  data() {
    return {
      loading:false,
      namePage: "Blog",
      bgColor: "bg-white border-b border-light shadow-lg",
      blogs:[
          {id:1,title:'8 Inspiring Ways to Wear Dresses in the Winter',des:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',src:'blog-04.jpg',date:'22/2/2021'},
          {id:2,title:'The Great Big List of Men’s Gifts for the Holidays',des:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',src:'blog-05.jpg',date:'11/1/2021'},
          {id:3,title:'5 Winter-to-Spring Fashion Trends to Try Now',des:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',src:'blog-06.jpg',date:'12/12/2020'},
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    getUnits(){
      $('.loader').fadeOut(3000);
    }

  },
};
</script>
<style >

.loader {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url('../assets/images/loading-nonbg.gif') 50% 50% no-repeat rgb(249,249,249);
}
</style>
