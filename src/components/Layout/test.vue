<template>
  <div class="w-full h-full bg-white">
    <div class="relative h-screen">
      <div class="fixed top-0 w-full flex items-center h-20 z-20 headerbg">
        <div class="ml-20 w-1/5"><img src="../assets/images/logo-01.png" /></div>
        <ul class="flex items-center w-3/4">
          <li
            v-for="page in pages"
            :key="page.name"
            :class="
              `mr-8 font-medium text-md text-black hover:text-purple ${
                pageActive === page.name ? 'text-purple' : 'text-black'
              }`
            "
          >
            <router-link :to="`${page.link}`">{{ page.name }}</router-link>
            <!-- <router-link to="/contact">Contact</router-link> -->
          </li>
        </ul>
        <ul class="flex items-center w-1/5">
          <li class="mr-7">
            <a href="#"
              ><span
                class="material-icons text-2xl text-black hover:text-purple"
                >search</span
              ></a
            >
          </li>
          <li class="mr-7">
            <a href="#"
              ><span
                class="material-icons text-2xl text-black hover:text-purple"
                >shopping_cart</span
              ></a
            >
            <span
              class="align-top -ml-2 rounded-full text-xs font-normal text-white bg-purple px-1"
              >4</span
            >
          </li>

          <li class="mr-7">
            <a href="#"
              ><span
                class="material-icons text-2xl text-black hover:text-purple"
                >favorite_border</span
              ></a
            >
            <span
              class="align-top -ml-2 rounded-full text-xs font-normal text-white bg-purple px-1"
              >2</span
            >
          </li>
        </ul>
      </div>
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
    <!-- PRODUCT OVERVIEW -->
    <div class="mx-20 py-5">
      <h1 class="text-grayter font-extrabold text-4xl tracking-normal">
        PRODUCT OVERVIEW
      </h1>
      <div class="flex items-center justify-between mt-8 mb-10">
        <ul class="flex items-center">
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-100 border-b border-grayter pb-1"
          >
            <a href="">All Product</a>
          </li>
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
          >
            <a href="">Women</a>
          </li>
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
          >
            <a href="">Men</a>
          </li>
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
          >
            <a href="">Bag</a>
          </li>
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
          >
            <a href="">Shoes</a>
          </li>
          <li
            class="mr-8 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
          >
            <a href="">Watches</a>
          </li>
        </ul>
        <div class="flex items-center">
          <el-button
            v-if="showBtnFilter === true"
            @click="handelCloseFilter"
            size="small"
            class="focus:outline-none"
            ><span class="material-icons mr-1 align-text-top text-sm"
              >close</span
            >Filter</el-button
          >
          <el-button
            v-else
            @click="handelShowFilter"
            size="small"
            class="focus:outline-none"
            ><span class="material-icons mr-1 align-text-top text-sm "
              >filter_list</span
            >Filter</el-button
          >

          <el-button
            v-if="showBtnSearch === true"
            @click="handelCloseSearch"
            size="small"
            class="focus:outline-none"
            ><span class="material-icons mr-1 align-text-top text-sm"
              >close</span
            >Search</el-button
          >
          <el-button
            v-else
            @click="handelShowSearch"
            size="small"
            class="focus:outline-none"
            ><span class="material-icons mr-1 align-text-top text-sm"
              >search</span
            >Search</el-button
          >
        </div>
      </div>
      <!-- filter -->
      <div class="bg-filter" v-if="showFilter">
        <div class="py-10 mx-14">
          <div class="grid grid-cols-4">
            <div>
              <h1 class="mb-4 font-bold text-md text-grayter capitalize">
                Sort by
              </h1>
              <ul v-for="sort in sorts" :key="sort.name">
                <li class="mb-1">
                  <a
                    href=""
                    :class="
                      `font-semibold text-md text-gray hover:text-purple hover:underline ${
                        sortActive === sort.name
                          ? 'text-purple underline'
                          : 'text-gray no-underline'
                      }`
                    "
                    >{{ sort.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h1 class="mb-4 font-bold text-md text-grayter capitalize">
                Price
              </h1>
              <ul v-for="price in prices" :key="price.name">
                <li class="mb-1">
                  <a
                    href=""
                    :class="
                      `font-semibold text-md text-gray hover:text-purple hover:underline ${
                        priceActive === price.name
                          ? 'text-purple underline'
                          : 'text-gray no-underline'
                      } `
                    "
                    >{{ price.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h1 class="mb-4 font-bold text-md text-grayter capitalize">
                color
              </h1>
              <ul v-for="color in colors" :key="color.name">
                <li class="mb-1">
                  <span
                    :class="`material-icons align-text-top mr-2 ${color.col}`"
                  >
                    fiber_manual_record
                  </span>
                  <a
                    href=""
                    :class="
                      `font-semibold text-md text-gray hover:text-purple hover:underline ${
                        colorActive === color.name
                          ? 'text-purple underline'
                          : 'text-gray no-underline'
                      } `
                    "
                    >{{ color.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h1 class="mb-4 font-bold text-md text-grayter capitalize">
                Tag
              </h1>
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
      <!-- Search -->
      <div class="flex justify-center items-center" v-if="showSearch">
        <el-input placeholder="Search" size="large">
          <i class="el-icon-search el-input__icon" slot="prefix"> </i
        ></el-input>
      </div>
      <!-- flex flex-wrap items-center justify-center -->
      <div class="grid grid-cols-4">
        <div
          class="mx-5 my-8 p-7 rounded-md shadow group hover:shadow-2xl"
          v-for="product in products"
          :key="product.id"
        >
          <div class="w-full h-60 overflow-hidden relative">
            <div class="absolute w-full h-full flex items-end justify-center">
              <button
                class="group-hover:opacity-100 mb-3 shadow-xl opacity-0 rounded-full py-2 px-6 text-md font-normal text-grayter bg-white hover:bg-grayter hover:text-white capitalize "
              >
                <a href="">Quick view</a>
              </button>
            </div>
            <img :src="product.image" class="" />
          </div>

          <div class="flex items-center justify-between my-2">
            <a
              href=""
              class="text-title text-md font-normal truncate hover:text-purple"
              >{{ product.title }}</a
            >
            <a href=""
              ><span
                class="material-icons font-normal text-title align-text-top text-lg hover:text-purple"
                >favorite_border</span
              ></a
            >
          </div>
          <p class="text-grayter font-normal text-md">$ {{ product.price }}</p>
        </div>
      </div>
      <div class="flex items-center justify-center mt-10 mb-20">
        <button
          class="rounded-full text-grayter font-semibold text-md tracking-tight uppercase bg-light py-2 px-9 hover:text-white hover:bg-black"
        >
          <a href="">Load more</a>
        </button>
      </div>
    </div>
    <div class="bg-black">
      <div class="grid grid-cols-4 mx-10">
        <div class="mt-16 mb-10 mx-10">
          <h1
            class="font-semibold text-white tracking-tight uppercase text-xl mb-5 font-sans"
          >
            Categoris
          </h1>
          <ul>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Women</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Men</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Shoes</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Watches</a>
            </li>
          </ul>
        </div>
        <div class="mt-16 mb-10 mx-10">
          <h1
            class="font-semibold text-white tracking-tight uppercase text-xl mb-5 font-sans"
          >
            Help
          </h1>
          <ul>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Track Order</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Returns</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">Shipping</a>
            </li>
            <li class="mb-3 text-sm text-light hover:text-purple">
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="mt-16 mb-10 mx-10">
          <h1
            class="font-semibold text-white tracking-tight uppercase text-xl mb-5 font-sans"
          >
            GET IN TOUCH
          </h1>
          <p class="mb-3 text-sm text-light">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div class="flex items-center">
            <a
              href="#"
              class="mr-4 text-light hover:text-purple"
              v-for="social in socials"
              :key="social.icon"
              ><img
                :src="getImgUrl(social.icon)"
                alt=""
                class="w-6 h-6"
                style="filter: invert(1)"
            /></a>
          </div>
        </div>
        <div class="mt-16 mb-10 mx-10">
          <h1
            class="font-semibold text-white tracking-tight uppercase text-xl mb-5 font-sans"
          >
            NEWSLETTER
          </h1>
          <form action="" method="">
            <input
              type="text"
              class="border-b border-grayter py-2 outline-none bg-black text-white mb-3"
              placeholder="email@example.com"
            />
            <button
              class="rounded-full text-white font-semibold text-md tracking-tight uppercase bg-purple py-2 px-9 hover:text-white hover:text-purple hover:bg-white"
            >
              <a href="">Subcriber</a>
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center justify-center">
          <a href="#" v-for="pay in pays" :key="pay.name"
            ><img :src="getImgUrl(pay.name)"
          /></a>
        </div>
        <p class="mb-10 text-md text-white flex justify-center mt-5">
          Copyright ©2021
        </p>
      </div>
    </div>
    <!-- Back to top -->
    <div class="fixed bottom-0 right-0 mr-14 mb-2">
      <button
        @click="topFunction"
        class=" focus:outline-none myBtn w-8 h-8 bg-gray hover:bg-purple"
      >
        <span class="material-icons p-1 text-white">keyboard_arrow_up</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch("https://fakestoreapi.com/products/category/women clothing")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
      });
  },
  data() {
    return {
      showBtnFilter: false,
      showFilter: false,
      showBtnSearch: false,
      showSearch: false,
      pageActive: "Home",
      sortActive: "Default",
      priceActive: "$50.00 - $100.00",
      colorActive: "White",
      products: [],
      pages: [
        { name: "Home" ,link:"/" },
        { name: "Shop",link:"/shop" },
        { name: "Features",link:"/features" },
        { name: "About",link:"/about"},
        { name: "Contact",link:"/contact" },
      ],
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
      pays: [
        { name: "icon-pay-01.png" },
        { name: "icon-pay-02.png" },
        { name: "icon-pay-03.png" },
        { name: "icon-pay-04.png" },
        { name: "icon-pay-05.png" },
      ],
      socials: [
        { icon: "instagram.png" },
        { icon: "pinterest.png" },
        { icon: "facebook.png" },
      ],
      sorts: [
        { name: "Default" },
        { name: "Popularity" },
        { name: "Average rating" },
        { name: "Newness" },
        { name: "Price: Low to High" },
        { name: "Price: High to Low" },
      ],
      prices: [
        { name: "All" },
        { name: "$0.00 - $50.00" },
        { name: "$50.00 - $100.00" },
        { name: "$100.00 - $150.00" },
        { name: "$150.00 - $200.00" },
        { name: "$200.00+" },
      ],
      colors: [
        { name: "Black", col: "text-black" },
        { name: "Blue", col: "text-blue-500" },
        { name: "Grey", col: "text-gray" },
        { name: "Green", col: "text-green-500" },
        { name: "Red", col: "text-red-500" },
        { name: "White", col: "text-white" },
      ],
      tags: [
        { name: "Fashion" },
        { name: "Lifestyle" },
        { name: "Denim" },
        { name: "Streetstyle" },
        { name: "Crafts" },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    handelShowFilter() {
      if (this.showBtnSearch === true || this.showSearch === true) {
        this.handelCloseSearch();
        this.showBtnFilter = true;
        this.showFilter = true;
      } else {
        this.showBtnFilter = true;
        this.showFilter = true;
      }
    },
    handelCloseFilter() {
      this.showBtnFilter = false;
      this.showFilter = false;
    },
    handelShowSearch() {
      if (this.showBtnFilter === true || this.showFilter === true) {
        this.handelCloseFilter();
        this.showBtnSearch = true;
        this.showSearch = true;
      } else {
        this.showBtnSearch = true;
        this.showSearch = true;
      }
    },
    handelCloseSearch() {
      this.showBtnSearch = false;
      this.showSearch = false;
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
