<template>
    <div class="row">
        <div v-for="view in viewCount" :key="view.maSP" class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg">
                    <img :src="view.hinhAnh" alt="">
                    <span class="label">New</span>
                    <ul class="product__hover">
                        <li><a href="#"><img src="/Websitefe/img/icon/heart.png" alt=""></a></li>
                        <li><a href="#"><img src="/Websitefe/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                        <li>
                            <router-link :to="'/shop/' + view.maSP ">
                                <img src="/Websitefe/img/icon/search.png" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6>{{view.tenSP}}</h6>
                    <a href="#" class="add-cart">+ Add To Cart</a>
                    <div class="rating">
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <h5>
                        {{
                            view.donGia.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })
                        }}
                    </h5>
                    <div class="product__color__select">
                        <label for="pc-1">
                            <input type="radio" id="pc-1">
                        </label>
                        <label class="active black" for="pc-2">
                            <input type="radio" id="pc-2">
                        </label>
                        <label class="grey" for="pc-3">
                            <input type="radio" id="pc-3">
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios'

    let viewCount = ref([])

    onMounted(() => {
        axios.get("https://localhost:7048/api/SanPham/GetSanPhamByViewCount?id=150")
            .then((response) => { 
                viewCount.value = response.data 
            })
    });
</script>

<style>

</style>