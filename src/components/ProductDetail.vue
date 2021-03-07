<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
      <div class="mt-20 ">
        <div class="mx-28">
          <div class="flex items-center justify-start pt-8">
            <a href="" class="text-sm hover:text-purple mr-2"
              >Home<span class="material-icons text-sm align-middle ml-1"
                >keyboard_arrow_right</span
              ></a
            >
            <a href="" class="text-sm hover:text-purple mr-2"
              >Men<span class="material-icons text-sm align-middle ml-1"
                >keyboard_arrow_right</span
              ></a
            >
            <a
              href=""
              aria-readonly="true"
              class="text-sm text-gray cursor-text"
              >Lightweight Jacket</a
            >
          </div>
          <!-- Product Popup -->
              <product-popup/>
          <!-- Description -->
          <div class="py-10 px-20 border border-light">
              <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="Description" name="first">
                <p class="my-10  text-md text-gray">Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.</p>
              </el-tab-pane>
              <el-tab-pane label="Additional information" name="second"> 
                <table class="text-md text-gray my-10">
                  <tr>
                    <td class="pr-16">Weight</td>
                    <td>0.97 kg</td>
                  </tr>
                  <tr>
                    <td class="pr-16">Dimensions</td>
                    <td>110 x 33 x 100 cm</td>
                  </tr>
                  <tr>
                    <td class="pr-16">Materials</td>
                    <td>60% cotton</td>
                  </tr>
                  <tr>
                    <td class="pr-16">Color</td>
                    <td>Black, Blue, Grey, Green, Red, White</td>
                  </tr>
                  <tr>
                    <td class="pr-16">Size</td>
                    <td>XL, L, M, S</td>
                  </tr>
                </table>
              </el-tab-pane>
              <el-tab-pane label="Reviews (1)" name="third">
                <div class="my-10 text-md text-gray">
                  <div class="flex items-start justify-start">
                      <img src="../assets/images/avatar-01.jpg" class="rounded-full">
                    <div class="ml-5">
                        <div class="flex items-center justify-start">
                          <p class="text-xl font-title text-grayter">Ariana Grande</p>
                          <el-rate class="align-baseline ml-5"
                            v-model="rateCustomer"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value} points">
                          </el-rate>
                        </div>
                        <p>Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos</p>
                    </div>
                  </div>
                  <div class="mt-14">
                     <p class="text-xl font-title text-grayter">Add a review</p>
                     <p class="mb-10">Your email address will not be published. Required fields are marked *</p>
                     <div class="flex items-center justify-start mb-5">
                       <span class="mr-5">Your Rating</span>
                       <el-rate v-model="valueRate"></el-rate>
                     </div>
                     <div class="w-1/2">
                     <p class="mb-3">Your review</p>
                     <textarea rows="3" class="border border-light p-5 w-full focus:outline-none"></textarea>
                     <div class="flex items-center justify-between ">
                       <div class="w-1/2 mr-3">
                         <p class="mb-3">Name</p>
                         <input type="text" class="p-3 border-light border focus:outline-none w-full">
                       </div>
                      <div class="w-1/2 ml-3">
                         <p class="mb-3">Email</p>
                        <input type="text" class="p-3 border-light border focus:outline-none w-full">
                       </div>
                     </div>
                     </div>
                      <button
              class="text-md font-medium py-3 px-9 my-5 rounded-full text-white bg-grayter border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
            >       
Submit
            </button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="bg-btn flex items-center justify-center py-8 text-md text-gray my-16">
          <span class="mr-10">SKU: JAK-01</span>
          <span>Categories: Jacket, Men</span>
        </div>
        <!-- Related Products -->
        <div class="my-16">
            <h1 class="text-center text-4xl font-bold tracking-tight text-grayter mb-16">Related Products</h1>

        </div>
        <div class="mx-20 mb-20">
            <carousel :autoplay="true" :nav="false" :items="numcarousel" :dots="false" :loop="true" :margin='mcarousel' class="px-10">
               <template slot="prev"><span class="prev">prev</span></template>
               <div class="text-center" v-for="product in products" :key="product.src">
                 <div class="parent group">
                   <div class="flex z-10 absolute items-end justify-center w-full h-full">
                     <button class="mb-5 opacity-0 group-hover:opacity-100 rounded-full px-6 py-2 text-md text-grayter bg-white hover:text-white hover:bg-grayter">Quick View</button>
                  </div>
                   <div class="child">
                     <img :src="getImgUrl(product.src)">
                   </div>
                 </div>
                <div class="flex items-center justify-between my-2">
                <a
                  href=""
                  class="text-title text-md font-normal truncate hover:text-purple"
                  >{{product.title}}</a
                >
                <a href=""
                  ><span
                    class="material-icons font-normal text-title align-text-top text-lg hover:text-purple"
                    >favorite_border</span
                  ></a
                >
                                            
              </div>
              <p class="text-grayter font-normal text-md text-left">
                $ {{product.price}}
              </p>

               </div>
               <template slot="next"><span class="next">next</span></template>
            </carousel>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
import carousel from 'vue-owl-carousel2'
import ProductPopup from './ProductPopup.vue';
export default {
  components: {
    carousel ,
    Footer,
    Header,
    ProductPopup,
  },
  data() {
    return {
      mcarousel:20,
      numcarousel:4,
      rateCustomer:4.5,
      valueRate:null,
      activeName: 'first',
      num2: 1,
      namePage: "Product Detail",
      bgColor: "bg-white border-b border-light shadow-lg",
      products:[
        {id:1,title:'Esprit Ruffle Shirt',price:'16.64',src:'product-01.jpg'},
        {id:2,title:'Herschel supply',price:'35.51',src:'product-02.jpg'},
        {id:3,title:'Only Check Trouser',price:'25.50',src:'product-03.jpg'},
        {id:4,title:'Classic Trench Coat',price:'40.23',src:'product-04.jpg'},
        {id:5,title:'Front Pocket Jumper',price:'34.75',src:'product-05.jpg'},
        {id:6,title:'Vintage Inspired Classic',price:'50.62',src:'product-06.jpg'},
        {id:7,title:'Shirt in Stretch Cotton',price:'63.25',src:'product-07.jpg'},
      ]
    };
  },
  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
      },
          getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
      
  },
};
</script>
<style>
.inputSelect .el-input__inner {
  height: 37px !important;
}
</style>
