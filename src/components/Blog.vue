<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor"/>  
      <div class="loader"></div>        
      <div class="mt-20">
        <div class="relative">
          <h1
            class=" w-full h-full absolute flex items-center justify-center font-bold text-6xl tracking-normal text-white capitalize "
          >
            Blog
          </h1>
          <img src="../assets/images/bg-02.jpg" alt="Content" class="h-full" />
        </div>

        <div class="my-16 mx-20 grid grid-cols-3">
          <div class="col-span-2">
            <div class="w-full mb-20" v-for="blog in blogs" :key="blog.id">

                <div class="parent">
                    <div class="z-10 absolute flex items-start justify-start w-full h-full">
                        <div class=" mt-3 ml-2 w-20 h-20 bg-date p-3 text-center">
                                <h1 class="font-bold text-grayter text-3xl">22</h1>
                                <p class="text-sm text-grayter">Jan 2021</p>
                        </div>
                    </div>
                    <div class="child">
                       <img :src="getImgUrl(blog.src)" alt="Blog" class="w-full h-full" />
                    </div>
                </div>
      
              <h1
                class="font-bold tracking-tight text-3xl text-grayter my-3 hover:text-purple"
              >
                <router-link to="/blog-detail">{{ blog.title }}</router-link>
              </h1>
              <p class="font-normal text-md text-gray mb-4 truncate">
                {{ blog.des }}
              </p>
              <div class="flex items-center justify-between">
                <p class="text-sm text-grayter">
                  <strong class="text-gray font-normal">By</strong> Admin | StreetStyle,
                  Fashion, Couple | 8 Comments
                </p>
                <button class="focus:outline-none group hover:text-purple">
                <a
                  href=""
                  class="font-semibold font-lg text-black group-hover:text-purple"
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
          <div class="ml-20">
            <el-input placeholder="Search" class="rounded-full"><i class="el-icon-search  el-input__icon" slot="suffix"></i></el-input>
            <div class="my-16">
              <h1 class="font-bold tracking-tight text-3xl text-grayter mb-10">Categories</h1>
              <ul v-for="tag in tags" :key="tag.name">
                <li class="p-3 text-md text-gray font-semibold border-b border-light hover:text-purple"><a href="">{{tag.name}}</a></li>
              </ul>
            </div>
            <div class="mb-16">
              <h1 class="font-bold tracking-tight text-3xl text-grayter mb-10">Featured Products</h1>
              <div v-for="feature in features" :key="feature.id" class="flex items-center justify-between">
                <div class="my-2 cursor-pointer bg-purple">
                  <img :src="getImgUrl(feature.src)" alt="Fearutes Product" class="hover:opacity-40">
                </div>
                <div class="my-2 ml-5">
                  <p class="text-md font-semibold text-grayter hover:text-purple cursor-pointer">{{feature.title}}</p>
                  <p class="text-md font-semibold text-gray">${{feature.price}}</p>
                </div>
              </div>
              
            </div>
            <div class="mb-16">
              <h1 class="font-bold tracking-tight text-3xl text-grayter my-5">Archive</h1>
              <div  v-for=" archive in archives" :key="archive.month" class="my-4 flex items-center justify-between group cursor-pointer">
                <div class="text-md text-gray font-semibold group-hover:text-purple">{{archive.month}}</div>
                <div class="text-md text-gray font-semibold group-hover:text-purple">({{archive.num}})</div>
              </div>
            </div>
            <div class="mb-16">
              <h1 class="font-bold tracking-tight text-3xl text-grayter my-5">Tag</h1>
                            <button
                v-for="tag in tags"
                :key="tag.name"
                class="font-normal text-md rounded-full px-3 py-1 mr-3 mb-3 border border-gray text-gray hover:text-purple hover:border-purple"
              >
                <a href="">{{ tag.name }}</a>
              </button>
            </div>
          </div>
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
export default {
  created: function(){
        this.getUnits()
    },
  mounted: function(){
    this.$nextTick(this.getUnits)
  },
  components: {
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
      tags: [
        { name: "Fashion" },
        { name: "Lifestyle" },
        { name: "Denim" },
        { name: "Streetstyle" },
        { name: "Crafts" },
      ],
      archives:[
        {month:'July 2020',num:'9'},
        {month:'June 2020',num:'39'},
        {month:'May 2020',num:'29'},
        {month:'April 2020',num:'35'},
        {month:'March 2020',num:'40'},
        {month:'February 2020',num:'55'},
        {month:'January 2020',num:'16'},
        {month:'December 2019',num:'15'},
      ],
      features:[
        {id:1,title:'White Shirt With Pleat Detail Back',price:'19.00',src:'product-min-01.jpg'},
        {id:2,title:'Converse All Star Hi Black Canvas',price:'39.00',src:'product-min-02.jpg'},
        {id:3,title:'Nixon Porter Leather Watch In Tan',price:'17.00',src:'product-min-03.jpg'},
      ]
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
.blog1{
    background-image: url(../assets/images/blog-04.jpg);
}
.blog2{
    background-image: url(../assets/images/blog-05.jpg);
}
.blog3{
    background-image: url(../assets/images/blog-06.jpg);
}
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
