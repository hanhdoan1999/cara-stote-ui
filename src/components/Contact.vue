<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
      <div class="mt-20">
        <div class="relative">
          <h1
            class=" w-full h-full absolute flex items-center justify-center font-bold md:text-6xl xs:text-2xl tracking-normal text-white capitalize "
          >
            Contact
          </h1>
          <img src="../assets/images/bg-01.jpg" alt="Content" class="lg:h-full xs:h-auto"  />
        </div>
        <!-- flex items-center justify-between -->
        <div class="md:my-20 md:mx-16 xs:my-10 xs:mx-8 grid md:grid-cols-2 xs:grid-cols-1">
          <div
            class="border border-light md:p-16 xs:p-8 flex flex-col justify-center xs:mb-8"
          >
            <h1 class="mb-10 text-center font-normal text-2xl text-grayter">
              Send Us A Message
            </h1>
            <form action="" method="get">
              <div class=" flex items-center justify-start border border-light focus:outline-none">
                <span class="material-icons ml-2 text-light">
                  mail_outline
                </span>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  class="p-4 w-full focus:outline-none"
                />
              </div>
              <textarea name=""  rows="7" placeholder="How Can We Help?" class="w-full mt-8 border p-5 border-light focus:outline-none"></textarea>
            <button class="rounded-full text-white text-md font-semibold bg-black w-full py-2 uppercase mt-5 hover:bg-purple focus:outline-none">Submit</button>
            </form>
          </div>
            <div
            class="border border-light md:p-24 xs:p-10 "
          >
          <div class="flex justify-start items-start">
              <i class="el-icon-location-outline mr-3 text-2xl"></i>
              <div>
                  <p class="text-xl text-black capitalize">Address</p><br>
                  <p class="text-lg text-gray">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
              </div>
          </div>
            <div class="flex justify-start items-start mt-10">
              <i class="el-icon-phone-outline mr-3 text-2xl"></i>
              <div>
                  <p class="text-xl text-black capitalize">Lets Talk</p><br>
                  <p class="text-lg text-purple">+1 800 1236879</p>
              </div>
          </div>
          <div class="flex justify-start items-start mt-10">
              <i class="el-icon-message mr-3 text-2xl"></i>
              <div>
                  <p class="text-xl text-black capitalize">Sale Support</p><br>
                  <p class="text-lg text-purple">contact@example.com

</p>
              </div>
          </div>
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
          namePage:'Contact',
          bgColor:'bg-white border-b border-light shadow-lg',
      }
  },
};
</script>
<style scoped>

</style>
