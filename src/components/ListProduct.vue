<template>
        <div class="md:mx-20 xs:mx-10">
          <div class="flex items-center justify-between mt-8 mb-10 md:flex-row xs:flex-col">
            <ul class="flex items-center xs:mb-10 md:mb-0">
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-100 border-b border-grayter pb-1"
              >
                <a href="">AllProduct</a>
              </li>
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
              >
                <a href="">Women</a>
              </li>
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
              >
                <a href="">Men</a>
              </li>
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
              >
                <a href="">Bag</a>
              </li>
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
              >
                <a href="">Shoes</a>
              </li>
              <li
                class="md:mr-8 xs:mr-3 text-md font-normal text-gray hover:text-grayter border-opacity-0 border-b border-grayter hover:border-opacity-100 pb-1"
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
              <div class="grid md:grid-cols-4 xs:grid-cols-1">
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
                        :class="
                          `material-icons align-text-top mr-2 ${color.col}`
                        "
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
          <div v-if="loading" class="flex justify-center items-center">
              <img src="../assets/images/Spin-1s-100px.gif">
          </div>
          <div class="grid md:grid-cols-4 xs:grid-cols-1">
            <div
              class=" md:mx-5 md:my-8 md:p-7 xs:p-5 xs:my-3 xs:mx-2 rounded-md shadow group hover:shadow-2xl"
              v-for="product in products"
              :key="product.id"
            >
              <div class="w-full h-60 overflow-hidden relative">
                <div
                  class="absolute w-full h-full flex items-end justify-center"
                >
                  <button @click.prevent="showPopupDetail(product)"
                    class=" group-hover:opacity-100 mb-3 shadow-xl opacity-0 rounded-full py-2 px-6 text-md font-normal text-grayter bg-white hover:bg-grayter hover:text-white capitalize "
                  >
                    <a href="">Quick view</a>
                  </button>
                </div>
                <img :src="product.image" class="" />
              </div>

              <div class="flex items-center justify-between my-2">
                <router-link @click.native="scrollToTop"
                  :to="{ name: 'product', params: { productId: `${product.id}` }}"
                  class="text-title text-md font-normal truncate hover:text-purple"
                  >{{ product.title }}</router-link
                >
                <a href=""
                  ><span
                    class="material-icons font-normal text-title align-text-top text-lg hover:text-purple"
                    >favorite_border</span
                  ></a
                >
              </div>
              <p class="text-grayter font-normal text-md">
                $ {{ product.price }}
              </p>
            </div>
          </div>
          <!-- Product Popup -->
          <el-dialog
            :visible.sync="dialogVisible"
            width="80%">
            <product-popup :itemDetail="this.itemDetail"/>
            </el-dialog>
             <!-- Load more button -->
          <div class="flex items-center justify-center mt-10 mb-20 ">
            <button
              class="rounded-full text-grayter font-semibold text-md tracking-tight uppercase bg-light py-2 px-9 hover:text-white hover:bg-black"
            >
              <a href="">Load more</a>
            </button>
          </div>
        </div>
</template>
<script>
import ProductPopup from './ProductPopup.vue';
export default {
  components: { ProductPopup },

  // mounted() {
  //   fetch("https://fakestoreapi.com/products/category/women clothing")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.products = json;
  //     });
  // },

   async created () {
    this.loading = true
    try {
      const res = await fetch('https://fakestoreapi.com/products/category/women clothing')
      this.products = await res.json()
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  },

  data() {
    return {
       loading: false,
      showDetail:false,
      itemDetail:null,
      dialogVisible: false,
      showBtnFilter: false,
      showFilter: false,
      showBtnSearch: false,
      showSearch: false,
      pageActive: "Home",
      sortActive: "Default",
      priceActive: "$50.00 - $100.00",
      colorActive: "White",
      products: [],
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
    showPopupDetail(product){
      console.log(product);
      this.dialogVisible = true
      this.itemDetail=product
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
    scrollToTop(){
        window.scrollTo(0,0);
    },
  },
};
</script>
<style scoped>
</style>
