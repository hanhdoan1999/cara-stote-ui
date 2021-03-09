<template >
    <div>
            <div class="bg-black">
      <div class="grid md:grid-cols-4 md:mx-10 xs:grid-cols-2">
        <div class="md:mt-16 mb-10 md:mx-10 xs:mt-8 xs:mx-5">
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
        <div class="md:mt-16 mb-10 md:mx-10 xs:mt-8 xs:mx-5">
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
        <div class="md:mt-16 mb-10 md:mx-10 xs:mt-8 xs:mx-5">
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
        <div class="md:mt-16 mb-10 md:mx-10 xs:mt-8 xs:mx-5 overflow-hidden">
          <h1
            class="font-semibold text-white tracking-tight uppercase text-xl mb-5 font-sans"
          >
            NEWSLETTER
          </h1>
          <form action="" method="">
            <input
              type="text"
              class="border-b border-grayter py-2 outline-none bg-black text-white mb-3 "
              placeholder="email@example.com"
            />
            <button
              class="rounded-full text-white font-semibold text-md tracking-tight uppercase bg-purple py-2 md:px-9 xs:px-8 hover:text-white hover:text-purple hover:bg-white"
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
    data() {
      return {
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
      }
    },
    methods: {
          getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
      topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    },
}
</script>
<style >
    
</style>