<template>
    <div>
            <!-- Shop Details Section Begin -->
    <section class="shop-details">
        <div class="product__details__pic">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__breadcrumb">
                            <router-link to="/">Trang Chủ</router-link>
                            <router-link to="/shop">Cửa Hàng</router-link>
                            <span>Chi Tiết Sản Phẩm</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <div class="product__thumb__pic set-bg">
                                        <img :src="products.hinhAnh" alt="">
                                    </div>
                                </a>
                            </li>
                            <!-- <li class="nav-item" v-for="img in images" :key="img.maAnhCT">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <div class="product__thumb__pic set-bg">
                                        <img v-bind:src="img.anh" alt="">

                                    </div>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-9">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img :src="products.hinhAnh" alt="">
                                </div>
                            </div>
                            <!-- <div class="tab-pane" id="tabs-2" role="tabpanel" v-for="img in listImage" :key="img.maAnhCT">
                                <div class="product__details__pic__item">
                                    <img :src="img.anh" alt="">
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel" v-for="img in listImage" :key="img.maAnhCT">
                                <div class="product__details__pic__item">
                                    <img :src="img.anh" alt="">
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-4" role="tabpanel" v-for="img in listImage" :key="img.maAnhCT">
                                <div class="product__details__pic__item">
                                    <img :src="img.anh" alt="">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product__details__content">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <div class="product__details__text">
                            <h4>{{products.tenSP}}</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <span> - 5 Reviews</span>
                            </div>
                            <h5>
                                Đơn Giá : {{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(products.donGia)}}
                            </h5>
                            <p>Áo khoác có lớp lót bông và mũ trùm đầu có thể điều chỉnh. Nổi bật với tay áo dài với các mấu cổ tay có thể điều chỉnh, viền bất đối xứng có thể điều chỉnh với các mấu bên co giãn và khóa kéo phía trước bằng túi.</p>
                            <div class="product__details__option">
                                <div class="product__details__option__size">
                                    <span>Size:</span>
                                    <label for="xxl">xxl
                                        <input type="radio" id="xxl">
                                    </label>
                                    <label class="active" for="xl">xl
                                        <input type="radio" id="xl">
                                    </label>
                                    <label for="l">l
                                        <input type="radio" id="l">
                                    </label>
                                    <label for="sm">s
                                        <input type="radio" id="sm">
                                    </label>
                                </div>
                                <div class="product__details__option__color">
                                    <span>Color:</span>
                                    <label class="c-1" for="sp-1">
                                        <input type="radio" id="sp-1">
                                    </label>
                                    <label class="c-2" for="sp-2">
                                        <input type="radio" id="sp-2">
                                    </label>
                                    <label class="c-3" for="sp-3">
                                        <input type="radio" id="sp-3">
                                    </label>
                                    <label class="c-4" for="sp-4">
                                        <input type="radio" id="sp-4">
                                    </label>
                                    <label class="c-9" for="sp-9">
                                        <input type="radio" id="sp-9">
                                    </label>
                                </div>
                            </div>
                            <div class="product__details__cart__option">
                                <div class="quantity">
                                    <div class="pro-qty">
                                        <input type="text" value="1">
                                    </div>
                                </div>
                                <span v-show="isadd" class="text-success">Đã thêm Vào Giỏ Hàng Thành Công</span>
                                <button v-on:click="addProductToCart(products)" class="primary-btn">Thêm Vào Giỏ Hàng </button>
                            </div>
                            <div class="product__details__btns__option">
                                <a href="#"><i class="fa fa-heart"></i> THÊM VÀO DANH SÁCH YÊU THÍCH</a>
                                <a href="#"><i class="fa fa-exchange"></i> THÊM VÀO ĐỂ SO SÁNH</a>
                            </div>
                            <div class="product__details__last__option">
                                <h5><span>Thanh toán an toàn được đảm bảo</span></h5>
                                <img src="/Websitefe/img/shop-details/details-payment.png" alt="">
                                <ul>
                                    <li><span>SKU:</span> 3812912</li>
                                    <li><span>Thể loại:</span> Clothes</li>
                                    <li><span>Nhãn:</span> Clothes, Skin, Body</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tabs-5"
                                    role="tab">Mô Tả</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Xem Trước Của Khách Hàng(5)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Thêm Thông Tin</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <p class="note">{{ products.moTa }}</p>
                                        <div class="product__details__tab__content__item">
                                            <h5>Thông tin sản phẩm</h5>
                                            <p>
                                                <ul>
                                                    <li>Mượt hơn kính hậu và có độ bóng nhẹ, các lớp phủ da được khâu thêm phong cách di sản, độ bền và hỗ trợ.</li>
                                                    <li>Được thiết kế ban đầu cho các vòng hiệu suất, đệm Nike Air tăng thêm sự nhẹ nhàng, thoải mái cả ngày.</li>
                                                    <li>Hình bóng cắt thấp thêm một cái nhìn gọn gàng, hợp lý.</li>
                                                    <li>Cổ áo có đệm, cổ thấp tạo cảm giác mềm mại và thoải mái.</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div class="product__details__tab__content__item">
                                            <h5>Chất liệu</h5>
                                            <p>
                                                <ul>
                                                    <li>đế xốp</li>
                                                    <li>Lỗ thủng trên ngón chân</li>
                                                    <li>Màu sắc hiển thị: Đen/Trắng</li>
                                                    <li>Phong cách: CT2302-002</li>
                                                    <li>Quốc gia/Khu vực xuất xứ: Việt Nam</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tabs-6" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <div class="product__details__tab__content__item">
                                            <h5>Dong Van Cong</h5>
                                            <p>
                                                Thoải mái và phù hợp với sự kết hợp quần áo của tôi. Thực sự yêu thích đôi giày này
                                            </p>
                                        </div>
                                        <div class="product__details__tab__content__item">
                                            <h5>Dang Hung Dang</h5>
                                            <p>
                                                Phù hợp tuyệt vời, trông tuyệt vời! Có thể nhận một cách nhanh chóng! Nhân viên siêu đẹp
                                            </p>
                                        </div>
                                        <div class="product__details__tab__content__item">
                                            <h5>Nguyen Trung Nhat</h5>
                                            <p>
                                                Thoải mái và phù hợp với sự kết hợp quần áo của tôi. Thực sự yêu thích đôi giày này
                                            </p>
                                        </div>
                                        <div class="product__details__tab__content__item">
                                            <h5>Cao van Dan</h5>
                                            <p>
                                                Phù hợp tuyệt vời, trông tuyệt vời! Có thể nhận một cách nhanh chóng! Nhân viên siêu đẹp
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tabs-7" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <h5>Thông tin sản phẩm</h5>
                                            <p>
                                                <ul>
                                                    <li>Mượt hơn kính hậu và có độ bóng nhẹ, các lớp phủ da được khâu thêm phong cách di sản, độ bền và hỗ trợ.</li>
                                                    <li>Được thiết kế ban đầu cho các vòng hiệu suất, đệm Nike Air tăng thêm sự nhẹ nhàng, thoải mái cả ngày.</li>
                                                    <li>Hình bóng cắt thấp thêm một cái nhìn gọn gàng, hợp lý.</li>
                                                    <li>Cổ áo có đệm, cổ thấp tạo cảm giác mềm mại và thoải mái.</li>
                                                </ul>
                                            </p>
                                        <div class="product__details__tab__content__item">
                                            <h5>Chất liệu</h5>
                                            <p>
                                                <ul>
                                                    <li>đế xốp</li>
                                                    <li>Lỗ thủng trên ngón chân</li>
                                                    <li>Màu sắc hiển thị: Đen/Trắng</li>
                                                    <li>Phong cách: CT2302-002</li>
                                                    <li>Quốc gia/Khu vực xuất xứ: Việt Nam</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shop Details Section End -->

    <!-- Related Section Begin -->
    <section class="related spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="related-title">Sản Phẩm Liên Quan</h3>
                </div>
            </div>
            <div class="row">
                <product-details></product-details>
            </div>
        </div>
    </section>
    <!-- Related Section End -->
    </div>
</template>

<script>
import axios from 'axios';
import ProductDetails from '@/components/Shopp/ProductDetails.vue'
import ProductImg from '@/components/Shopp/ProductImg.vue'
let cart = [];
    export default{
        name: "ShopDetails",
        components:{
            ProductDetails,
            ProductImg
        },
        data(){
            return{
                products:{},
                images:{},
                isadd:false,
            }
        },
        methods:{
            sanPhamID(data){
                this.products = data
            },
            addProductToCart(products) {
                this.isadd=false;
                let gio= (window.localStorage.getItem('cart'))
                if(gio){
                    cart= JSON.parse(window.localStorage.getItem('cart'));
                    let item = cart.find((i)=> i.maSP == products.maSP)
                        if (item) {
                            item.soLuong++;
                        } 
                        else {
                            cart.push({...products, soLuong: 1 })
                        }
                    localStorage.setItem('cart', JSON.stringify(cart))
                    this.isadd=true;
                }
                else{
                    cart.push({...products, soLuong: 1 })
                    localStorage.setItem('cart', JSON.stringify(cart))
                    this.isadd=true
                }
                window.location.reload();
            },
        },
        mounted(){
            axios
            .get("https://localhost:7048/api/SanPham/get-by-id/"+this.$route.params.id)
            .then((response) => this.sanPhamID(response.data))
            .catch((error) => console.log(error));
        },
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