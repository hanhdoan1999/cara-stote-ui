<template>
  <div class="w-full bg-white">
    <div class="relative">
     <Header :pageActive="this.namePage" :bgColor="this.bgColor"/>
     <div class="loader"></div> 
      <el-carousel class="w-full relative md:h-screen xs:h-52 sm:h-72">
        <el-carousel-item v-for="carousel in carousels" :key="carousel.id">
          <!-- mt-64 ml-20 -->
          <div
            class="absolute flex flex-col justify-center items-start w-full h-full md:ml-20 xs:ml-5"
          >
            <p class="xs:text-sm text-grayter tracking-tight md:text-3xl">
              {{ carousel.des }}
            </p>
            <h1
              class="xs:text-lg md:text-7xl font-extrabold font-serif text-grayter tracking-tight uppercase md:my-5 xs:my-1"
            >
              {{ carousel.heading }}
            </h1>
            <button
              class="rounded-full bg-purple text-white font-medium md:text-md md:px-4 md:py-3 xs:text-xs xs:px-3 xs:py-1 uppercase xs:mt-1 md:mt-5 hover:shadow-xl hover:bg-black "
            >
              <a href="">shop now</a>
            </button>
          </div>
          <img :src="getImgUrl(carousel.src)"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- banner -->
    <div class="mb-16 md:mt-16 xs:mt-0 md:mx-16 xs:mx-8 md:flex-row flex items-center justify-center xs:flex-col ">
      <div
        class="w-full relative mx-4 border border-light group hover:bg-purple xs:my-3 "
        v-for="banner in banners"
        :key="banner.id"
      >
        <div
          class="absolute flex flex-col justify-center items-start md:ml-10 xs:ml-5  w-full h-full "
        >
          <h1
            class="font-bold md:text-3xl xs:text-2xl  tracking-tight text-grayter group-hover:text-white"
          >
            {{ banner.heading }}
          </h1>
          <p
            class="font-normal text-md text-gray font-sans mt-1 group-hover:text-white"
          >
            {{ banner.des }}
          </p>
          <button
            class="font-bold tracking-tight uppercase py-1 border-b-2 md:mt-20 xs:mt-10 border-white text-white opacity-0 group-hover:opacity-100"
          >
            Shop Now
          </button>
        </div>
        <img :src="getImgUrl(banner.src)" class="group-hover:opacity-40" />
      </div>
    </div>
    <div class="mx-20">
      <h1 class="text-grayter font-extrabold md:text-4xl tracking-normal xs:text-xl xs:text-center md:text-left">
        PRODUCT OVERVIEW
      </h1>
    </div>
    <!-- PRODUCT OVERVIEW -->
    <list-product/>
    <Footer/>
  </div>
</template>

<script>
import $ from 'jquery'
import Header from './Header'
import Footer from './Footer'
import ListProduct from './ListProduct';
export default {
    mounted: function(){
    this.$nextTick(this.getUnits)
  },
  components: {
    Footer,
    Header,
    ListProduct,
  },
  data() {
    return {
      namePage: "Home",
      bgColor: "bg-none",
      carousels: [
        {
          id: 1,
          heading: "New Season",
          des: "Women Collection 2021",
          src: "slide-01.jpg",
        },
        {
          id: 2,
          heading: "Jackets & Coats",
          des: "Men Mew-season",
          src: "slide-03.jpg",
        },
        {
          id: 3,
          heading: "New arrivals",
          des: "Man Collection 2021",
          src: "slide-02.jpg",
        },
      ],
      banners: [
        { id: 4, heading: "Woman", des: "Spring 2021", src: "banner-01.jpg" },
        { id: 5, heading: "Man", des: "Spring 2021", src: "banner-02.jpg" },
        {
          id: 6,
          heading: "Accessories",
          des: "New trend",
          src: "banner-03.jpg",
        },
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
.el-carousel__container {
  position: initial !important;
}
.el-carousel__arrow--right:focus {
  outline: none;
}
.el-carousel__arrow--left:focus {
  outline: none;
}
.el-input__inner {
  height: 60px !important;
  border-radius: 0 !important;
  padding: 15px 15px;
}
.headerActive {
  background-color: #fff;
  border-bottom: 1px solid rgb(211, 209, 209);
  box-shadow: 0 4px 6px -6px #222;
}
</style>
