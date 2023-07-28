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
                                    <h4 class="ok">Thanh Toán Thành Công !!!</h4>
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
                                <li>Tổng Cộng <span >0</span></li>
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

<style scoped>
h4.ok {
    text-align: center;
    margin: 70px 46px 76px 57px;
}

</style>