<template>
  <div>
  <!-- Slider -->
<div class="splideco">
  <div class="slider">
    <slide-view></slide-view>
  </div>
</div>

<!-- Banner Section Begin -->
<section class="banner spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 offset-lg-4">
                <div class="banner__item">
                    <div class="banner__item__pic">
                        <img src="/Websitefe/img/banner/banner-1.jpg" alt="">
                    </div>
                    <div class="banner__item__text">
                        <h2>Bộ Sưu Tập Quần Áo 2030</h2>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="banner__item banner__item--middle">
                    <div class="banner__item__pic">
                        <img src="/Websitefe/img/banner/banner-2.jpg" alt="">
                    </div>
                    <div class="banner__item__text">
                        <h2>Phụ Kiện</h2>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="banner__item banner__item--last">
                    <div class="banner__item__pic">
                        <img src="/Websitefe/img/banner/banner-3.jpg" alt="">
                    </div>
                    <div class="banner__item__text">
                        <h2>Giày Thể Thao 2030</h2>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Banner Section End -->

<!-- Product Section Begin -->
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                        <h2>Sản Phẩn Mới Cập Nhập </h2>
                    </div>
                    <ul class="filter__controls">
                        <li class="active" data-filter="*">Tất Cả</li>
                        <li v-for="item in tenLoai" :key="item.maLoai" data-filter=".loaisp{{item.maLoai}}">{{item.tenLoai}}</li>
                    </ul>
          </div>
        </div>
        <div class="row product__filter">
            <div v-for="item in soLuong" :key="item.maSP" class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix loaisp{{item.maLoai}} hot-sales">
                <div class="product__item">
                    <div class="product__item__pic set-bg">
                        <img :src="item.hinhAnh" alt="">
                        <span class="label">New</span>
                        <ul class="product__hover">
                        <li><a href="#"><img src="/Websitefe/img/icon/heart.png" alt=""></a></li>
                        <li><a href="#"><img src="/Websitefe/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                            <li>
                                <router-link :to="'/shop/' + item.maSP ">
                                    <img src="/Websitefe/img/icon/search.png" alt="">
                                </router-link>
                            </li>
                        </ul>
                        </div>
                        <div class="product__item__text">
                        <h6>{{ item.tenSP }}</h6>
                        <!-- <a href="#" class="add-cart">+ Add To Cart</a> -->
                            <div class="rating">
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            </div>
                            <h5>
                                {{
                                item.donGia.toLocaleString("vi-VN", {
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
  </div>
</section>
<!-- Product Section End -->

<!-- Categories Section Begin -->
<section class="categories spad">
  <div class="container">
      <div class="row">
          <div class="col-lg-3">
              <div class="categories__text">
                  <h2>Quần Áo Nổi Bật <br /> <span>Bộ Sưu Tập Giày</span> <br /> Phụ Kiện</h2>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="categories__hot__deal">
                  <img src="/Websitefe/img/shop-details/nike11.jpg" alt="">
                  <div class="hot__deal__sticker">
                      <span>Sale Of</span>
                      <h5>$29.99</h5>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 offset-lg-1">
              <div class="categories__deal__countdown">
                  <span>GIAO DỊCH TRONG TUẦN</span>
                  <h2>Multi-pocket Chest Bag Black</h2>
                  <div class="categories__deal__countdown__timer" id="countdown">
                      <div class="cd-item">
                          <span>3</span>
                          <p>Days</p>
                      </div>
                      <div class="cd-item">
                          <span>1</span>
                          <p>Hours</p>
                      </div>
                      <div class="cd-item">
                          <span>50</span>
                          <p>Minutes</p>
                      </div>
                      <div class="cd-item">
                          <span>18</span>
                          <p>Seconds</p>
                      </div>
                  </div>
                  <a href="#" class="primary-btn">Mua Ngay</a>
              </div>
          </div>
      </div>
  </div>
</section>
<!-- Categories Section End -->

<!-- Instagram Section Begin -->
<section class="instagram spad">
  <div class="container">
      <div class="row">
          <div class="col-lg-8">
              <div class="instagram__pic">
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-1.jpg" alt="">
                  </div>
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-2.jpg" alt="">
                  </div>
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-3.jpg" alt="">
                  </div>
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-4.jpg" alt="">
                  </div>
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-5.jpg" alt="">
                  </div>
                  <div class="instagram__pic__item set-bg">
                      <img src="/Websitefe/img/instagram/instagram-6.jpg" alt="">
                  </div>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="instagram__text">
                  <h2>Instagram</h2>
                  <p>Điều quan trọng là phải chăm sóc bệnh nhân, được bệnh nhân theo dõi, nhưng nó sẽ xảy ra vào thời điểm đó rất nhiều công việc và đau đớn.</p>
              </div>
          </div>
      </div>
  </div>
</section>
<!-- Instagram Section End -->

<!-- Latest Blog Section Begin -->
<section class="latest spad">
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <div class="section-title">
                  <span>Tin Mới Nhất</span>
                  <h2>Thời Trang Xu Hướng Mới</h2>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                  <div class="blog__item__pic set-bg">
                      <img src="/Websitefe/img/blog/blog-2.jpg" alt="">
                  </div>
                  <div class="blog__item__text">
                      <span><img src="/Websitefe/img/icon/calendar.png" alt=""> 16 February 2020</span>
                      <h5>Bí kíp tạo dáng chụp ảnh đẹp như mẫu nam Hàn Quốc</h5>
                      <a href="#">Đọc Tiếp</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                  <div class="blog__item__pic set-bg">
                      <img src="/Websitefe/img/blog/blog-1.jpg" alt="">
                  </div>
                  <div class="blog__item__text">
                      <span><img src="/Websitefe/img/icon/calendar.png" alt=""> 21 February 2020</span>
                      <h5>Bí kíp phối đồ tập gym nam cực chất lại thoải mái cho chàng</h5>
                      <a href="#">Đọc Tiếp</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                  <div class="blog__item__pic set-bg">
                      <img src="/Websitefe/img/blog/blog-3.jpg" alt="">
                  </div>
                  <div class="blog__item__text">
                      <span><img src="/Websitefe/img/icon/calendar.png" alt=""> 28 February 2020</span>
                      <h5>Top 10 sản phẩm bán chạy nhất 6/2023 tại Coolmate</h5>
                      <a href="#">Đọc Tiếp</a>
                  </div>
              </div>
          </div>
        </div>
    </div>
</section>
<!-- Latest Blog Section End -->
  </div>

</template>

<script setup>
    import SlideView from '@/components/SlideView.vue'
    import { onMounted, ref } from 'vue';
    import axios from 'axios'

    let soLuong = ref([])
    let tenLoai = ref([])

    onMounted(() => {
        axios.get("https://localhost:7048/api/Home/GetNewProduct?Soluong=8")
            .then((response) => { 
                soLuong.value = response.data 
            })
    });
    onMounted(() => {
        axios.get("https://localhost:7048/api/LoaiSanPham/GetAll")
            .then((response) => { 
                tenLoai.value = response.data 
            })
    });
    components: {
    SlideView
    }
</script>


<style scoped>
.blog__item__text {
  padding: 45px 0px 25px;
  margin-top: -35px;
  background: #ffffff;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}
</style>