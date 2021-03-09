<template>
  <div>
    <div
      :class="
        `fixed top-0 w-full flex md:flex-row xs:flex-col xs:items-start md:items-center md:h-20 xs:h-auto  z-20 headerbg ${bgColor}`
      "
    >
      <div class="md:ml-20 md:w-1/5 cursor-pointer md:mr-5 xs:m-4 xs:flex xs:items-center xs:justify-between xs:w-full">
          <img src="../assets/images/logo-01.png"/>
          <span v-if="btnOpen===false" @click="openMenu" class="material-icons xs:mr-8 md:hidden" >menu</span>
          <span v-else @click="closeMenu" class="material-icons xs:mr-8 md:hidden">close</span>
      </div>
      <ul :class="`md:flex md:flex-row xs:flex-col xs:items-start md:items-center w-3/5 xs:${this.showPage}`" >
        <li 
          v-for="page in pages"
          :key="page.name"
          :class=" 
            `xs:my-2 xs:ml-4 mr-8 font-medium text-md text-black hover:text-purple ${
              pageActive === page.name ? 'text-purple' : 'text-black'
            }`
          "
        >
        <router-link @click.native="scrollToTop" :to="{name: `${page.name}`}">{{page.name }}</router-link>

        </li>
      </ul>
      <ul :class="`md:flex md:items-baseline md:justify-end md:mb-0 w-1/5 xs:ml-4 xs:mb-4 xs:${this.showPage}`">
        <li class="md:mr-7 xs:mr-3">
          <a href="#" @click="drawerSearch=true"
            ><span class="material-icons text-2xl text-black hover:text-purple"
              >search</span
            ></a
          >
        </li>
        <li class="md:mr-7 xs:mr-3">
          <a href="#" @click="openCart" class="relative">
            <span class="material-icons text-2xl text-black hover:text-purple">shopping_cart</span>
             <span class=" absolute align-top rounded-full text-xs font-normal text-white bg-purple px-1 -ml-2">4</span>
            </a>
        </li>
        <!-- favorite_border -->
        <li class="md:mr-7 xs:mr-3">
          <a href="#" class="relative">
            <span class="material-icons text-2xl text-black hover:text-purple">favorite_border </span>
             <span class=" absolute align-top rounded-full text-xs font-normal text-white bg-purple px-1 -ml-2">2</span>
            </a>
        </li>
      </ul>
    </div>
    <!-- CART -->
    <el-drawer :visible.sync="drawer" :size='this.sizeScreen' >
      <div class="md:mx-16 mt-0 xs:mx-10">
        <h1 class="font-bold tracking-tight text-2xl text-grayter mb-3">
          YOUR CART
        </h1>
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex items-center justify-start"
        >
          <div class="my-2 cursor-pointer bg-purple">
            <img
              :src="getImgUrl(feature.src)"
              alt="Fearutes Product"
              class="hover:opacity-40"
            />
          </div>
          <div class="ml-3">
            <p
              class="text-sm font-medium text-grayter hover:text-purple cursor-pointer mb-2"
            >
              {{ feature.title }}
            </p>
            <p class="text-sm font-semibold text-gray">
              {{ feature.num }} x ${{ feature.price }}
            </p>
          </div>
        </div>
        <h1 class="font-semibold tracking-tight text-xl text-grayter my-10">
          TOTAL: $75.00
        </h1>
        <div class=" flex items-center justify-center">
          <button
            class="text-md font-medium py-3 mb-5 mr-3 px-6 rounded-full text-white bg-grayter border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
          >
            View cart
          </button>
          <button
            class="text-md font-medium py-3 mb-5 px-6 rounded-full text-white bg-grayter border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
          >
            Check out
          </button>
        </div>
      </div>
    </el-drawer>
    <!-- SEARCH -->
    <el-drawer :visible.sync="drawerSearch" :direction="direction">
        <div class="flex justify-center items-center md:mx-32 xs:mx-10 mt-0 " >
        <el-input placeholder="Search" size="large" v-model="valueSearch">
          <i class="el-icon-search el-input__icon" slot="prefix"> </i
        ></el-input>
      </div>
    </el-drawer>
  </div>
</template>
<script>
 import $ from 'jquery'
export default {

  props: ["pageActive", "bgColor"],
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);

  },
  data() {
    return {
      showPage:'hidden',
      btnOpen:false,
      sizeScreen:'',
      drawer: false,
      drawerSearch:false,
      direction:'ttb',
      valueSearch:'',
      // pageActive:"Home",
      pages: [
        { name: "Home", link: "/" },
        { name: "Shop", link: "/shop" },
        { name: "Features", link: "/features" },
        { name: "Blog", link: "/blog" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        // { name: "Product Detail", link: "/product" },
      ],
      features: [
        {
          id: 1,
          title: "White Shirt Pleat",
          price: "19.00",
          num: "1",
          src: "item-cart-01.jpg",
        },
        {
          id: 2,
          title: "Converse All Star",
          price: "39.00",
          num: "1",
          src: "item-cart-02.jpg",
        },
        {
          id: 3,
          title: "Nixon Porter Leather",
          price: "17.00",
          num: "1",
          src: "item-cart-03.jpg",
        },
      ],
    };
  },
  methods: {
    openMenu(){
      let headerBG = document.getElementsByClassName("headerbg")[0];
      if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
        headerBG.classList.add("headerActive");
      } 
      this.btnOpen=true
      this.showPage='flex'
    },
    closeMenu(){
      this.btnOpen=false
      this.showPage='hidden'
    },
    getSizeDrawer(){
      if($(window).width()>=768){
        this.sizeScreen='30%'
      }else{
         this.sizeScreen='100%'
      }
    },
    openCart(){
      this.drawer = true
      this.getSizeDrawer()
    },

    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
   handleScroll(){
   let headerBG = document.getElementsByClassName("headerbg")[0];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerBG.classList.add("headerActive");
  } else {
    headerBG.classList.remove("headerActive");
  }
},

scrollToTop(){
  console.log('tatata');
  window.scrollTo(0,0);
}
  },
};
</script>
<style>
button:focus{
  outline: none;
}

</style>
