<template>
  <div class="w-full h-full bg-white">
    <div class="relative h-screen">
     <Header :pageActive="this.namePage" :bgColor="this.bgColor"/>
      <el-carousel class="h-screen w-full relative">
        <el-carousel-item v-for="carousel in carousels" :key="carousel.id">
          <!-- mt-64 ml-20 -->
          <div
            class="absolute flex flex-col justify-center items-start w-full h-full ml-20"
          >
            <p class="text-grayter tracking-tight text-3xl">
              {{ carousel.des }}
            </p>
            <h1
              class="text-7xl font-extrabold font-serif text-grayter tracking-tight uppercase my-5"
            >
              {{ carousel.heading }}
            </h1>
            <button
              class="rounded-full bg-purple text-white font-medium text-md px-4 py-3 uppercase mt-5 hover:shadow-xl hover:bg-black "
            >
              <a href="">shop now</a>
            </button>
          </div>
          <img :src="getImgUrl(carousel.src)" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- banner -->
    <div class="my-16 mx-16 flex items-center justify-center ">
      <div
        class="w-full relative mx-4 border border-light group hover:bg-purple"
        v-for="banner in banners"
        :key="banner.id"
      >
        <!-- mt-10 ml-10 -->
        <div
          class="absolute flex flex-col justify-center items-start ml-10 w-full h-full"
        >
          <h1
            class="font-bold text-3xl tracking-tight text-grayter group-hover:text-white"
          >
            {{ banner.heading }}
          </h1>
          <p
            class="font-normal text-md text-gray font-sans mt-1 group-hover:text-white"
          >
            {{ banner.des }}
          </p>
          <button
            class="font-bold tracking-tight uppercase py-1 border-b-2 mt-20 border-white text-white opacity-0 group-hover:opacity-100"
          >
            Shop Now
          </button>
        </div>
        <img :src="getImgUrl(banner.src)" class="group-hover:opacity-40" />
      </div>
    </div>
    <div class="mx-20">
      <h1 class="text-grayter font-extrabold text-4xl tracking-normal">
        PRODUCT OVERVIEW
      </h1>
    </div>
    <!-- PRODUCT OVERVIEW -->
    <list-product/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import ListProduct from './ListProduct';
export default {
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
