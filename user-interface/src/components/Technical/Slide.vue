<template>
  <div class="carousel" >
      <slot></slot>
      <button @click.prevent="next" class="btn btn-next"><i class="fa fa-angle-right"></i></button>
      <button @click.prevent="prev" class="btn btn-prev"><i class="fa fa-angle-left"></i></button>
  </div>
</template>
<script>
export default {
  data () {
      return {
      }
  },
  methods: {
      next(){
        this.$emit('next')
      },
      prev(){
        this.$emit('prev')
      },
  }
}
</script>
<style>
    .carousel {
        position:relative;
        overflow: hidden;
        width: 1579px;
        height: 697px;
    }
    button{
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
        background-color: rgba(0,0,0,0.8);
        border: none;
        color: #FFF;
    }
    button:focus, button:hover{
        outline: none;
        cursor: pointer;
    }
    .next{
        right: 0;
    }
    .prev{
        left: 0;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
</style>