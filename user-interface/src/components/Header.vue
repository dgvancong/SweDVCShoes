<template>
  <div>
    <div id="preloder">
        <div class="loader"></div>
    </div>
  
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__option">
            <div class="offcanvas__links">
                <a href="#">VND</a>
                <a href="#">FAQs</a>
            </div>
            <div class="offcanvas__top__hover">
                <span>Đăng Nhập <i class="arrow_carrot-down"></i></span>
                <ul>
                    <li>Đăng Nhập</li>
                    <li>Đăng Ký</li>
                    <li>Đăng Xuất</li>
                </ul>
            </div>
        </div>
        <div class="offcanvas__nav__option">
            <a href="#" class="search-switch"><img src="/Websitefe/img/icon/search.png" alt=""></a>
            <a href="#"><img src="/Websitefe/img/icon/heart.png" alt=""></a>
            <a href="#"><img src="/Websitefe/img/icon/cart.png" alt=""> <span>0</span></a>
            <div class="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__text">
            <p>Miễn phí vận chuyển, bảo đảm đổi trả hoặc hoàn tiền trong 30 ngày.</p>
        </div>
    </div>
  
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7">
                        <div class="header__top__left">
                            <p>Miễn phí vận chuyển, bảo đảm đổi trả hoặc hoàn tiền trong 30 ngày.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <div class="header__top__right">
                            <div class="header__top__links">
                                <a href="#">VND</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div class="header__top__hover">
                                <span><router-link to="/login">{{ hoTen }} <i class="arrow_carrot-down"></i></router-link></span>
                                <ul>
                                    <li>
                                        <router-link to="/login">Đăng Nhập</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sign">Đăng Ký</router-link>
                                    </li>
                                    <li><a v-on:click="logout()">Đăng Xuất</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                        <router-link to="/">
                            <img src="/Websitefe/img/logo-full_20ce9553ecdf47b3becda4ff02971466.jpg" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li class="active"><router-link to="/">Trang Chủ</router-link></li>
                            <li>
                                <router-link to="/shop">Cửa Hàng</router-link>
                            </li>
                            <li><a href="#">Trang</a>
                                <ul class="dropdown">
                                    <li>
                                        <router-link to="/about">Giới Thiệu </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about">Chi Tiết Sản Phẩm</router-link>
                                    </li>
                                    <li><a href="./shopping-cart.html">Giỏ Hàng</a></li>
                                    <li>
                                        <router-link to="/about">Thanh Toán</router-link>
                                    </li>
                                    <li><a href="./blog-details.html">Tin Tức Chi Tiết</a></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/blog">Tin Tức</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">Liên Hệ</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="header__nav__option">
                        <a href="#" class="search-switch"><img src="/Websitefe/img/icon/search.png" alt=""></a>
                        <a href="#"><img src="/Websitefe/img/icon/heart.png" alt=""></a>
                        <router-link to="/shoppingcart"><img src="/Websitefe/img/icon/cart.png" alt=""> <span>0</span></router-link>
                        <div class="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
    </header>
  </div>
  </template>
  
  <script>
  export default {
      name:'Header',
      data(){
        return{
            hoTen:''
        }
      },
      methods:{
        logout(){
            alert("Bạn chắc chắn muốn thoát chứ ! Toàn bộ dữ liệu của bạn sẽ mất ")
            localStorage.clear()
            this.$router.push({name:'login'})
        }
      },
      mounted() {
        let user = localStorage.getItem('users');
        this.hoTen=JSON.parse(user).hoTen;
        // location.reload();
      },
  }
  </script>
  
  <style scoped>
  li a{
      color: black;
  }
  a{
      color: aliceblue;
  }
  </style>