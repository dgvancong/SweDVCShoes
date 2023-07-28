<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__logo">
                            <a href="#"><img src="/Websitefe/img/logo-full_20ce9553ecdf47b3becda4ff02971466.jpg" alt=""></a>
                        </div>
                        <p>Khách hàng là trung tâm của mô hình kinh doanh độc đáo của chúng tôi, bao gồm cả thiết kế.</p>
                        <a href="#"><img src="/Websitefe/img/payment.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Mua Sắm</h6>
                        <ul>
                            <li><a href="#">Cửa Hàng Quần Áo</a></li>
                            <li><a href="#">Bộ Sư Tập Giày</a></li>
                            <li><a href="#">Phụ Kiện</a></li>
                            <li><a href="#">Doanh Thu</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Chính Sách Bảo Vệ</h6>
                        <ul>
                            <li><a href="#">Liên Hệ Với Chúng Tôi</a></li>
                            <li><a href="#">Phương Thức Thanh Toán</a></li>
                            <li><a href="#">Giao Hàng</a></li>
                            <li><a href="#">Trả Lại & Trao Đổi</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div class="footer__widget">
                        <h6>Bảng Tin</h6>
                        <div class="footer__newslatter">
                            <p>Hãy là người đầu tiên biết về những người mới đến, sách tìm kiếm, bán hàng và khuyến mãi!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email">
                                <button type="submit"><span class="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
.footer__widget h6 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0px;
    margin-bottom: 20px;
}
.footer {
	background: #111111;
	padding-top: 70px;
}

.footer__about {
	margin-bottom: 30px;
}

.footer__about .footer__logo {
	margin-bottom: 30px;
}

.footer__about .footer__logo a {
	display: inline-block;
}

.footer__about p {
	color: #b7b7b7;
	margin-bottom: 30px;
}

.footer__widget {
	margin-bottom: 30px;
}
.footer__widget ul li {
	line-height: 36px;
	list-style: none;
}

.footer__widget ul li a {
	color: #b7b7b7;
	font-size: 14px;
}

.footer__widget .footer__newslatter p {
	color: #b7b7b7;
}

.footer__widget .footer__newslatter form {
	position: relative;
}

.footer__widget .footer__newslatter form input {
	width: 100%;
	font-size: 15px;
	color: #3d3d3d;
	background: transparent;
	border: none;
	padding: 15px 0;
	border-bottom: 2px solid #ffffff;
}

.footer__widget .footer__newslatter form input::-webkit-input-placeholder {
	color: #3d3d3d;
}

.footer__widget .footer__newslatter form input::-moz-placeholder {
	color: #3d3d3d;
}

.footer__widget .footer__newslatter form input:-ms-input-placeholder {
	color: #3d3d3d;
}

.footer__widget .footer__newslatter form input::-ms-input-placeholder {
	color: #3d3d3d;
}

.footer__widget .footer__newslatter form input::placeholder {
	color: #3d3d3d;
}

.footer__widget .footer__newslatter form button {
	color: #b7b7b7;
	font-size: 16px;
	position: absolute;
	right: 5px;
	top: 0;
	height: 100%;
	background: transparent;
	border: none;
}

.footer__copyright__text {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding: 20px 0;
	margin-top: 40px;
}

.footer__copyright__text p {
	color: #b7b7b7;
	margin-bottom: 0;
}

.footer__copyright__text p i {
	color: #e53637;
}

.footer__copyright__text p a {
	color: #e53637;
}
</style>