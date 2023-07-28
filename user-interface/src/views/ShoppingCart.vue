<template>
<div>
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Giỏ Hàng </h4>
                        <div class="breadcrumb__links">
                            <router-link to="/">Trang Chủ</router-link>
                            <router-link to="/shop">Cửa Hàng</router-link>
                            <span>Giỏ Hàng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="shopping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn Giá</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in cart" :key="product.maSP">
                                    <td class="product__cart__item">
                                        <div class="product__cart__item__pic">
                                            <img :src="product.hinhAnh" alt="" style="width: 150px;">
                                        </div>
                                        <div class="product__cart__item__text">
                                            <h6>{{product.tenSP}}</h6>
                                            <h6>{{product.mauSac}}</h6>
                                            <h6>{{product.kichThuoc}}</h6>
                                            <h6>
                                                {{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.donGia)}}
                                            </h6>
                                        </div>
                                    </td>
                                    <td class="quantity__item">
                                        <div class="quantity">
                                            <div class="pro-qty-2">
                                                <input type="text" :value="product.soLuong">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="cart__price">{{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.donGia * product.soLuong)}}</td>
                                    <button class="cart__close" v-on:click="xoaCart()"><i class="fa fa-close"></i></button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn">
                                <router-link to="/shop">
                                    Tiếp Tục Mua Hàng
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn update__btn">
                                <button class="delete-cart primary-btn" v-on:click="xoaCart()">Xoá</button>
                                <button class="update-cart primary-btn" v-on:click="updateCart()">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cart__discount">
                        <h6>Mã Giảm Giá</h6>
                        <form action="#">
                            <input type="text" placeholder="Nhập mã">
                            <button type="submit">Nhập</button>
                        </form>
                    </div>
                    <div class="cart__total">
                        <h6>Tổng Giỏ Hàng</h6>
                        <ul>
                            <li>Tổng Cộng <span >{{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total)}}</span></li>
                        </ul>
                        <router-link class="primary-btn" to="/checkout">Thanh Toán</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->
</div>
</template>

<script>
var listItem = JSON.parse(localStorage.getItem('cart'));
    export default{
        data(){
            return{
                cart:"",
            }
        },
        mounted(){
            this.cart = JSON.parse(localStorage.getItem("cart")) || [];
            this.total = this.cart.reduce((acc, product) => acc + product.soLuong * product.donGia, 0);
        },
        methods:{
            xoaCart() {
                if (confirm("Bạn muốn xóa sản phẩm khỏi giỏ hàng!")) {
                    localStorage.removeItem('cart');
                    location.reload();
                }
            },
            updateCart() {
                localStorage.setItem('cart', JSON.stringify(listItem));
                    alert("Đã cập nhật thông tin giỏ hàng thành công!");
                    location.reload();
            }
        }
    }
</script>