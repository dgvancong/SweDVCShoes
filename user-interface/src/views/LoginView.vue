<template>
  		<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
					<span class="login100-form-title p-b-43">
						Đăng Nhập Hệ Thống
					</span>
					
					
					<div class="form-group">
                        <input type="text" class="form-input" v-model="email" placeholder="Email"/>
                        <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                    </div>
					
					
					<div class="form-group">
                        <input type="number" class="form-input" v-model="matKhau" placeholder="Nhập Mật Khẩu"/>
                        <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                    </div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" class="txt1">
								Quên Mật Khẩu?
							</a>
						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" v-on:click="login">
							Đăng Nhập
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
    name:"LoginView",
    data(){
        return{
            email:'',
            matKhau:''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `https://localhost:7048/api/Users/GetAll_nguoidung?email=${this.email}&matKhau=${this.matKhau}`
            )
            alert("Đăng Nhập Thành Công")
            this.$router.push('/');
            if(result.status==200 & result.data.lenght>0){
                localStorage.setItem("users",JSON.stringify(result.data))
                this.$router.push('/')
            }
            console.warn(result)
            location.reload();
        }
    }
};
</script>

<style scoped>
.limiter {
    width: 100%;
    margin: 0 auto;
}
.wrap-login100 {
    width: 560px;
    min-height: 100vh;
    display: block;
    background-color: #f7f7f7;
    padding: 95px 55px 55px 55px;
}
.container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
}
.wrap-login100 {
    background: #fff;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    flex-wrap: wrap;
    align-items: stretch;
    flex-direction: row-reverse;
}
input.form-input {
    width: 100%;
    height: 50px;
}
.login100-form {
    width: 560px;
    min-height: 100vh;
    display: block;
    background-color: #f7f7f7;
    padding: 95px 55px 55px 55px;
}
.p-b-43 {
    padding-bottom: 43px;
}
.validate-input {
    position: relative;
}

.wrap-input100 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 100%;
    height: 80px;
    position: relative;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    margin-bottom: 10px;
}
input.input100 {
    height: 100%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.input100 {
    display: block;
    width: 100%;
    background: transparent;
    font-size: 18px;
    color: #555555;
    line-height: 1.2;
    padding: 0 26px;
}
input {
    outline: none;
    border: none;
}
button, input {
    overflow: visible;
}
.focus-input100 {
    position: absolute;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    pointer-events: none;
    border: 1px solid #6675df;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transform: scaleX(1.1) scaleY(1.3);
    -moz-transform: scaleX(1.1) scaleY(1.3);
    -ms-transform: scaleX(1.1) scaleY(1.3);
    -o-transform: scaleX(1.1) scaleY(1.3);
    transform: scaleX(1.1) scaleY(1.3);
}
.contact100-form-checkbox {
    display: flex;
    margin-bottom: 5px;
}
.label-input100 {
    font-size: 18px;
    color: #999999;
    line-height: 1.2;
    display: block;
    position: absolute;
    pointer-events: none;
    width: 100%;
    padding-left: 24px;
    left: 0;
    top: 30px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.flex-sb-m {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    -ms-align-items: center;
    align-items: center;
}
.w-full {
    width: 100%;
}
.p-b-32 {
    padding-bottom: 32px;
}
.p-t-3 {
    padding-top: 3px;
}
.container-login100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.p-b-20 {
    padding-bottom: 20px;
}
.p-t-46 {
    padding-top: 46px;
}
.text-center {
    text-align: center!important;
}
.flex-c-m {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
}
.login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-image: linear-gradient(to left, #74ebd5, #9face6);
    font-size: 12px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

button {
    outline: none !important;
    border: none;
    background: transparent;
}
input {
	outline: none;
	border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; }
input:focus::-moz-placeholder { color:transparent; }
input:focus:-ms-input-placeholder { color:transparent; }

textarea:focus::-webkit-input-placeholder { color:transparent; }
textarea:focus:-moz-placeholder { color:transparent; }
textarea:focus::-moz-placeholder { color:transparent; }
textarea:focus:-ms-input-placeholder { color:transparent; }

input::-webkit-input-placeholder { color: #999999;}
input:-moz-placeholder { color: #999999;}
input::-moz-placeholder { color: #999999;}
input:-ms-input-placeholder { color: #999999;}

textarea::-webkit-input-placeholder { color: #999999;}
textarea:-moz-placeholder { color: #999999;}
textarea::-moz-placeholder { color: #999999;}
textarea:-ms-input-placeholder { color: #999999;}


label {
  display: block;
  margin: 10px;
}
.login100-form-title {
    width: 100%;
    display: block;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
}
.login100-form-social-item {
    width: 36px;
    height: 36px;
    font-size: 18px;
    color: #fff;
    border-radius: 50%;
}

.bg1 {
    background: #3b5998;
}
.login100-form-social-item {
    width: 36px;
    height: 36px;
    font-size: 18px;
    color: #fff;
    border-radius: 50%;
}

.bg2 {
    background: #1da1f2;
}
input#password {
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 17px 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    color: #222;
}
input#email {
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 17px 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    color: #222;
}
.form-group {
    overflow: hidden;
    margin-bottom: 20px;
}
</style>