<template>
<div>
        <!-- Breadcrumb Section Begin -->
        <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Thanh Toán</h4>
                        <div class="breadcrumb__links">
                            <router-link to="/">Trang Chủ</router-link>
                            <router-link to="/shop">Cửa Hàng</router-link>
                            <span>Thanh Toán</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <h6 class="coupon__code"><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click
                            here</a> to enter your code</h6>
                            <h6 class="checkout__title">Chi Tiết Thanh Toán</h6>

                            <div class="checkout__input">
                                <p>Họ Tên :</p>
                                <input type="text" class="checkout__input__add" v-model="donHang.hoTen">
                            </div>

                            <div class="checkout__input">
                                <p>Địa Chỉ :</p>
                                <input type="text" placeholder="Street Address" class="checkout__input__add" v-model="donHang.diaChi">
                            </div>

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Số Điện Thoại :</p>
                                        <input type="text" v-model="donHang.soDT">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email : </p>
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                            <div class="checkout__input">
                                <p>Post Code :</p>
                                <input type="text" class="checkout__input__add" v-model="donHang.trangThaiDonHang">
                            </div>

                            <div class="checkout__input">
                                <p>Ghi Chú<span>*</span></p>
                                <input type="text" v-model="donHang.ghiChu"
                                placeholder="Notes about your order, e.g. special notes for delivery.">
                            </div> 
                        </div>



                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4 class="order__title">Đơn Hàng Của Bạn</h4>
                                <div class="checkout__order__products">Sản Phẩm<span>Đơn Giá </span></div>
                                <ul class="checkout__total__products">
                                    <li v-for="product in cart" :key="product.maSP">{{product.tenSP}}<span>{{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.donGia * product.soLuong)}}</span></li>
                                </ul>
                                <ul class="checkout__total__all">
                                    <li>Tổng Cộng <span>{{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total)}}</span></li>
                                </ul>
                                <div class="checkout__input__checkbox">
                                    <label for="payment">
                                        Kiểm tra thanh toán
                                        <input type="checkbox" id="payment">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="checkout__input__checkbox">
                                    <label for="paypal">
                                        Thanh Toán Chuyển Khoản
                                        <input type="checkbox" id="paypal">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <input type="button" value="Đặt Hàng" v-on:click="Checkout" class="site-btn">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- Checkout Section End -->
</div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                cart:[],
                donHang : {
                    hoTen:'',
                    diaChi:'',
                    soDT:'',
                    trangThaiDonHang:'',
                    ghiChu:'Chờ xác nhận'
                },
            }
        },
        methods:{
            async Checkout(){
                 console.warn(this.donHang);
                let result = await axios.post("https://localhost:7278/api/DonHang/create_donhang",
                {
                    hoTen : this.donHang.hoTen,
                    diaChi:this.donHang.diaChi,
                    soDT:this.donHang.soDT,
                    trangThaiDonHang:this.donHang.trangThaiDonHang,
                    ghiChu:this.donHang.ghiChu,
                    listjson_detail: JSON.parse(localStorage.getItem("cart")) || []
                    
                });
                console.log("result",result);
                localStorage.removeItem('cart');
                this.$router.push('/sucss')
            }
        },
        mounted(){
            this.cart = JSON.parse(localStorage.getItem("cart")) || [];
            this.total = this.cart.reduce((acc, product) => acc + product.soLuong * product.donGia, 0);
        },
    }
</script>