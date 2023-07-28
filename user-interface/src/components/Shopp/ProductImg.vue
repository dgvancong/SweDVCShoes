<template>
    <div>
        <li class="nav-item" v-for="img in Image" :key="img.maAnhCT">
            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                <div class="product__thumb__pic set-bg">
                    <img v-bind:src="img.anh" alt="">
                </div>
            </a>
        </li>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios'

    let Image = ref([])

    onMounted(() => {
        axios.get("https://localhost:7048/api/SanPham/get-by-id/"+this.$route.params.id)
            .then((response) => { 
                Image.value = response.data 
            })
    });
</script>

<style>

</style>