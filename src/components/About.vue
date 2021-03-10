<template>
  <div class="w-full h-full bg-white">
    <div class="relative">
      <Header :pageActive="this.namePage" :bgColor="this.bgColor" />
       <div class="loader"></div>  
      <div class="mt-20">
        <div class="relative">
          <h1
            class=" w-full h-full absolute flex items-center justify-center font-bold md:text-6xl xs:text-2xl tracking-normal text-white capitalize "
          >
            About
          </h1>
          <img src="../assets/images/bg-01.jpg" alt="Content" class="lg:h-full xs:h-auto" />
        </div>
        <div class="md:my-20 md:mx-20 xs:mx-10 xs:my-10 ">
          <div class="grid md:grid-cols-3 xs:grid-cols-1">
            <div class="col-span-2 md:mr-16 xs:mr-0">
              <h1 class="font-bold text-3xl text-black mb-5">Our Story</h1>
              <p class="text-gray text-md mb-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p class="text-gray text-md mb-5 ">
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p class="text-gray text-md md:mb-5 xs:mb-16">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div class="flex items-center justify-start"
            >
              <div class="ml-4 pb-4 border-4 border-light">
                <div class="parent -mt-6 -ml-6">
                    <div class="child">
                      <img src="../assets/images/about-01.jpg" class="h-auto">
                    </div>
                </div>
              </div>
            </div>

          </div>
          <div class="grid md:grid-cols-3 mt-24 xs:grid-cols-1">
            <div class="flex items-center justify-start"
            >
              <div class="ml-4 pb-4 border-4 border-light">
                <div class="parent -mt-6 -ml-6">
                    <div class="child">
                      <img src="../assets/images/about-02.jpg" class="h-auto">
                    </div>
                </div>
              </div>
            </div>
            <div class="col-span-2 md:ml-14 xs:ml-0 xs:mt-10">
              <h1 class="font-bold text-3xl text-black mb-5">Our Mission</h1>
              <p class="text-gray text-md mb-5">
                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
                rhoncus dignissim risus, sed consectetur erat. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nullam maximus mauris sit amet odio convallis,
                in pharetra magna gravida. Praesent sed nunc fermentum mi
                molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit
                egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor,
                consequat odio in, porttitor ante. Ut mauris ligula, volutpat in
                sodales in, porta non odio. Pellentesque tempor urna vitae mi
                vestibulum, nec venenatis nulla lobortis. Proin at gravida ante.
                Mauris auctor purus at lacus maximus euismod. Pellentesque
                vulputate massa ut nisl hendrerit, eget elementum libero
                iaculis.
              </p>
              <div class="pt-2 pl-7 border-l-2 border-light">
                <p class="text-md mb-2 font-semibold text-gray italic">
                  Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn't really do it, they just saw something. It
                  seemed obvious to them after a while.
                </p>
                <p class="text-sm text-gray">- Steve Job’s</p>
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
import $ from 'jquery'
import Footer from "./Footer";
import Header from "./Header";
export default {

  mounted: function(){
    this.$nextTick(this.getUnits)
  },
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      namePage: "About",
      bgColor: "bg-white border-b border-light shadow-lg",
    };
  },
  methods: {
  getUnits(){
      $('.loader').fadeOut(1000);
    }
  },
};
</script>
<style >
              /* <!-- <img src="../assets/images/about-02.jpg" alt="About" /> --> */
.bg-about1{
    background-image: url(../assets/images/about-01.jpg);
}
.bg-about2{
    background-image: url(../assets/images/about-02.jpg);
}
.parent {
    width: 100%;
    /* margin: 20px; */
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    display: inline-block;
}
.child {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.parent:hover .child, .parent:focus .child {
    -ms-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
}

.parent:hover .child:before, .parent:focus .child:before {
    display: block;
}

.parent:hover .test, .parent:focus .test {
    display: block;
}
.child:before {
    /* content: ""; */
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52,73,94,0.75);
}
</style>
