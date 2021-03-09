<template >
          <div class="md:ml-20 xs:m-0 xs:mt-10">
            <el-input placeholder="Search" class="rounded-full"><i class="el-icon-search  el-input__icon" slot="suffix"></i></el-input>
            <div class="md:my-16 xs:my-8">
              <h1 class="font-bold tracking-tight text-3xl text-grayter md:mb-10 xs:mb-5 ">Categories</h1>
              <ul v-for="tag in tags" :key="tag.name">
                <li class=" p-3 md:text-md xs:text-sm text-gray font-semibold border-b border-light hover:text-purple"><a href="">{{tag.name}}</a></li>
              </ul>
            </div>
            <div class="md:mb-16 xs:mb-8">
              <h1 class="font-bold tracking-tight text-3xl text-grayter mb-10 ">Featured Products</h1>
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
            <div class="md:mb-16 xs:mb-8">
              <h1 class="font-bold tracking-tight text-3xl text-grayter my-5 ">Archive</h1>
              <div  v-for=" archive in archives" :key="archive.month" class="  my-4 flex items-center justify-between group cursor-pointer">
                <div class="md:text-md xs:text-sm text-gray font-semibold group-hover:text-purple">{{archive.month}}</div>
                <div class="md:text-md xs:text-sm text-gray font-semibold group-hover:text-purple">({{archive.num}})</div>
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
</template>
<script>
export default {
    data() {
        return {
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
        }
    },
    methods: {
            getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    },
}
</script>
<style >
    
</style>