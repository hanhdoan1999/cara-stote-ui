<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
      <div class="mt-20">
        <div class="relative">
          <h1
            class=" w-full h-full absolute flex items-center justify-center font-bold xs:text-4xl md:text-6xl tracking-normal text-white capitalize "
          >
            Blog
          </h1>
          <img src="../assets/images/bg-02.jpg" alt="Content" class="md:h-full xs:h-auto" />
        </div>

        <div class="md:my-16 md:mx-20 xs:my-8 xs:mx-10 grid md:grid-cols-3 xs:grid-cols-1">
          <div class="col-span-2">
            <div class="w-full md:mb-20 xs:mb-5" v-for="blog in blogs" :key="blog.id">

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
                <p class="text-sm text-grayter my-5">
                  <strong class="text-gray font-normal">By</strong> Admin | StreetStyle,
                  Fashion, Couple | 8 Comments
                </p>
              <h1
                class="font-bold tracking-tight md:text-3xl xs:text-lg text-grayter md:my-3 xs:my-0 hover:text-purple"
              >
                <a href="">{{ blog.title }}</a>
              </h1>
              <p class="text-md text-gray my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.</p>
              <p class="text-md text-gray my-5">Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate</p>
              <div class="flex justify-start items-baseline my-10 flex-wrap">
                  <span class="text-md text-grayter mr-3">Tags</span>
                    <button
                v-for="tag in tags"
                :key="tag.name"
                class="font-normal text-md rounded-full px-3 py-1 mr-3 mb-3 border border-gray text-gray hover:text-purple hover:border-purple"
              >
                <a href="">{{ tag.name }}</a>
              </button>
              </div>

            <!-- LEAVE A COMMENT -->
            
            <form class="mt-14">
                     <p class="text-xl font-semibold text-grayter mb-5">LEAVE A COMMENT</p>
                     <p class="mb-10">Your email address will not be published. Required fields are marked *</p>
                     <div class="w-full">
                     <textarea placeholder="Comment..." rows="3" class="border border-light p-5 w-full focus:outline-none"></textarea>
                     <div class="flex flex-col">
                     <input placeholder="Name *" type="text" class="md:w-1/3 xs:w-full border-light border focus:outline-none p-3 my-3">
                     <input placeholder="Email *" type="text" class="md:w-1/3 xs:w-full border-light border focus:outline-none p-3 my-3">
                     <input placeholder="Website" type="text" class="md:w-1/3 xs:w-full border-light border focus:outline-none p-3 my-3">
                     </div>
                     </div>
                      <button
              class="text-md font-medium py-3 px-9 my-5 rounded-full text-white bg-grayter border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
            >       
post comment
            </button>
            </form>

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
import Footer from "./Footer";
import Header from "./Header";
import SideBlog from './SideBlog.vue';
export default {
  components: {
    SideBlog,
    Footer,
    Header,
  },
  data() {
    return {
      namePage: "Blog",
      bgColor: "bg-white border-b border-light shadow-lg",
    blogs:[
          {id:1,title:'8 Inspiring Ways to Wear Dresses in the Winter',des:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',src:'blog-04.jpg',date:'22/2/2021'},
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
  },
};
</script>
<style >
.blog1{
    background-image: url(../assets/images/blog-04.jpg);
}


</style>
