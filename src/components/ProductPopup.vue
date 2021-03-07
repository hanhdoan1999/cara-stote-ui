<template>
          <div class="grid-cols-2 grid my-10">
            <div class="mx-10">
              <!-- <img src="../assets/images/product-detail-01.jpg" alt="" /> -->
              <img :src="`${itemDetail.image}`" alt="">
            </div>
            <div class="m-5">
              <h1 class="mb-5 text-3xl font-title text-grayter ">
                {{itemDetail.title}}
              </h1>
              <p class="text-xl mb-5 font-title text-grayter font-semibold">
                ${{itemDetail.price}}              </p>
              <p class="text-md mb-5 font-title text-gray font-medium">
                {{itemDetail.description}}
              </p>
              <div class="mx-20">
                <div class="flex items-center justify-between mb-5">
                  <p class="text-md font-title text-gray font-medium w-1/4">
                    Size
                  </p>
                  <el-select
                    v-model="valueSelect"
                    placeholder="Choose an option"
                    class="w-3/4 inputSelect"
                  >
                    <el-option
                      v-for="item in size"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="flex items-start justify-between mb-5">
                  <p class="text-md font-title text-gray font-medium w-1/4">
                    Color
                  </p>
                  <div class="w-3/4">
                    <el-select
                      v-model="valueSelect"
                      placeholder="Choose an option"
                      class="inputSelect mb-5 w-full"
                    >
                      <el-option
                        v-for="item in color"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                    <el-input-number
                      size="medium"
                      v-model="num2"
                      :min="1"
                      :max="10"
                      class="inputSelect mb-5"
                    ></el-input-number>
                    <button
                      class="mb-10 rounded-full text-white font-semibold text-md tracking-tight uppercase bg-purple py-3 px-9 hover:text-white  hover:bg-grayter"
                    >
                      <a href="">Add to cart</a>
                    </button>
                    <div class="flex items-center justify-start ml-1">
                    <el-tooltip content="Add To Wishlist" placement="top" effect="light">
                      <a href="" class="mr-4"
                        ><i class="	fa fa-heart-o  text-title hover:text-purple "></i></a
                      >
                    </el-tooltip>
                    <el-tooltip content="Facebook" placement="top" effect="light">
                      <a href="" class=" mr-4"
                        ><i class="fa fa-facebook text-title hover:text-purple "></i>
                          
                        </a
                      >
                    </el-tooltip>
                    <el-tooltip content="Twitter" placement="top" effect="light">
                      <a href="" class=" mr-4"
                        ><i class="fa fa-twitter hover:text-purple  text-title"></i></a
                      >
                    </el-tooltip>
                    <el-tooltip content="Google" placement="top" effect="light">
                      <a href="" class="mr-4"
                        ><i class="fa fa-google-plus hover:text-purple  text-title"></i></a
                      >
                    </el-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
export default {
  props:['itemDetail'],
  data() {
    return {
     num2:1,
      size: [
        { value: "Size S", lable: "Size S" },
        { value: "Size M", lable: "Size M" },
        { value: "Size L", lable: "Size L" },
        { value: "Size XL", lable: "Size XL" },
      ],
      color: [
        { value: "Red", lable: "Red" },
        { value: "Blue", lable: "Blue" },
        { value: "White", lable: "White" },
        { value: "Gray", lable: "Gray" },
      ],

    };
  },
};
</script>
<style>
</style>
