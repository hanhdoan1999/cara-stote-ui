<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
      <div class="pt-24">
      <list-product/>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
import ListProduct from './ListProduct';
export default {
  components: {
    Footer,
    Header,
    ListProduct,
  },
  data() {
    return {
      namePage: "Shop",
      bgColor: "bg-white border-b border-light shadow-lg",
    };
  },
};
</script>
<style scoped></style>
