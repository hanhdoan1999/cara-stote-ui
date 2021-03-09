<template>
  <div class="w-full  bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
      <div class="mt-20">
        <div class="grid md:grid-cols-3 xs:grid-cols-1 justify-center md:mx-10 md:p-20 xs:p-3 xs:mx-2">
          <div class="col-span-2 border-light border p-4 md:mr-6 xs:mr-0 fearure xs:mb-5">
            <el-table :data="features" style="width: 100%">
              <el-table-column label="PRODUCT" width="100">
                <template slot-scope="scope">
                  <img :src="getImgUrl(scope.row.src)" class="py-5" />
                </template>
              </el-table-column>
              <el-table-column width="180">
                <template slot-scope="scope">
                  <span class="text-lg text-gray font-normal">{{
                    scope.row.name
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column label="PRICE" width="100">
                <template slot-scope="scope">
                  <span class="text-lg text-gray font-normal"
                    >${{ scope.row.price }}</span
                  >
                </template>
              </el-table-column>
              <el-table-column label="QUANTITY" width="180">
                <template slot-scope="scope">
                  <div>
                    <el-input-number
                      size="small"
                      v-model="scope.row.quantity"
                      :min="1"
                      :max="10"
                    ></el-input-number>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="TOTAL">
                <template slot-scope="scope">
                  <span class="text-lg text-gray font-normal"
                    >${{ scope.row.total }}</span
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="flex justify-between items-center my-8 flex-wrap ">
              <div class="flex items-center justify-start flex-wrap xs:my-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  class="py-2 px-6 rounded-full border border-light focus:outline-none xs:my-3"
                />
                <button
                  class="text-md font-medium py-2 px-6 rounded-full text-grayter bg-btn border border-light hover:text-white hover:bg-purple uppercase md:ml-5 sm:ml-0 focus:outline-none"
                >
                  Apply coupon
                </button>
              </div>
              <button
                class="text-md font-medium py-2 px-6 rounded-full text-grayter bg-btn border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
              >
                Update Cart
              </button>
            </div>
          </div>
          <div class="md:ml-3 py-3 md:px-8 xs:ml-0 xs:px-4 border-light border">
            <h1 class="font-bold tracking-tight text-xl text-grayter my-5">
              CART TOTALS
            </h1>
            <div
              class="w-full pb-4 flex items-center justify-start border-b border-dashed border-light"
            >
              <p class="text-lg font-medium text-grayter">Subtotal:</p>
              <span class="text-lg ml-8">$79.65</span>
            </div>
            <div class="flex items-start justify-start my-5">
              <p class="text-lg font-medium text-grayter">Shipping:</p>
              <div class="ml-8">
                <p class="text-sm text-gray mb-3">
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <p class="uppercase text-sm text-grayter mb-3">
                  CALCULATE SHIPPING
                </p>
                <!-- Postcode / Zip -->
                <select name="" id="" class=" w-full py-2 px-3 border-light border focus:outline-none mb-3 pr-3">
                    <option value="USA">Select a country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <input type="text" placeholder="State /  country" class="py-2 px-3 border-light border focus:outline-none mb-3 pr-3">
                <input type="text" placeholder="Postcode / Zip" class="py-2 px-3 border-light border focus:outline-none mb-3 pr-3">

                <button
                  class="text-md font-medium py-2 px-6 rounded-full text-grayter bg-btn border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
                >
                  Update totals
                </button>
              </div>
            </div>
            <div
              class="w-full py-4 flex items-center justify-start border-t border-dashed border-light"
            >
              <p class="text-lg font-medium text-grayter">Total:</p>
              <span class="text-lg ml-8">$79.65</span>
            </div>
            <button
              class=" w-full text-md font-medium py-3 mb-5 rounded-full text-white bg-grayter border border-light hover:text-white hover:bg-purple uppercase focus:outline-none"
            >
              
Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      num: 1,
      namePage: "Features",
      bgColor: "bg-white border-b border-light shadow-lg",
      features: [
        {
          id: 1,
          src: "item-cart-05.jpg",
          name: "Fresh Strawberries",
          price: "36.00",
          quantity: 1,
          total: "36.00",
        },
        {
          id: 2,
          src: "item-cart-04.jpg",
          name: "Lightweight Jacket",
          price: "16.00",
          quantity: "2",
          total: "32.00",
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
.fearure .el-input__inner {
  height: 0 !important;
}


</style>
