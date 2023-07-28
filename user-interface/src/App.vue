<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>

</template>

<script>
// Website Client
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default{
  name: 'Home',

  components: {Header, Footer},
  
}
</script>