<template>
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="/Websitefe/img/banner/ACW_C70_eComm_WB_Available_Now.jpg" alt="Sample 1">
      </SplideSlide>
  
      <SplideSlide>
        <img src="/Websitefe/img/banner/Main_Home_Banner_Desktop_Playtime_Prints.jpg" alt="Sample 2">
      </SplideSlide>
      
      <SplideSlide>
        <img src="/Websitefe/img/banner/289026545_3405836716306038_7641686448615158677_n.jpg" alt="Sample 2">
      </SplideSlide>
    </Splide>
  </template>
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { defineComponent } from 'vue';
  export default defineComponent({
      components: {
      Splide,
      SplideSlide,
    },
    setup() {
      const options = {
        rewind: true,
        gap   : '1rem',
      };
  
      return { options };
    },
  }); 
  </script>
  
  <style scoped>
  .splide__slide img{
      height: auto;
      object-fit: cover;
      display: block;
      width: 100%;
  }
  .content_women_layer_span {
      font-family: Poppins-Regular;
      font-size: 28px;
      line-height: 1.2857;
      color: #333;
  }
  .content_women_new_h2 {
      font-family: PlayfairDisplay-Bold;
      font-size: 60px;
      line-height: 1.1;
      text-transform: uppercase;
      color: black;
      padding-bottom: 43px;
      padding-top: 19px;
  }
  
  .content_women_shop_a{
      border-radius: 23px;
      background-color: #717fe0;
      font-family: Poppins-Medium;
      font-size: 15px;
      text-transform: uppercase;
      color: #fff;
  }
  
  .content_women {
      position: absolute;
      top: 19%;
      left: 13%;
  }
  
  
  a.content_women_shop_a {
      padding: 15px;
      padding-left: 25px;
      padding-right: 25px;
  }
  
  </style>