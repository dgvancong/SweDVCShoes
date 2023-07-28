<template>
      <div class="main">

    <section class="signup">
    <!-- <img src="images/signup-bg.jpg" alt=""> -->
    <div class="container">
        <div class="signup-content">
            <h2 class="form-title">Tạo Tài Khoản</h2>
            <div class="form-group">
                <input type="text" v-model="hoTen" class="form-input"  placeholder="Nhập Họ và Tên"/>
            </div>
            <div class="form-group">
                <input type="email" v-model="email" class="form-input"  placeholder="Nhập Email"/>
            </div>
            <div class="form-group">
                <input type="text" v-model="matKhau" class="form-input"  placeholder="Nhập Mật Khẩu"/>
                <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
            </div>
            <div class="form-group">
                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>Chúng Tôi Đồng Ý  <a href="#" class="term-service">Terms of service</a></label>
            </div>
            <button v-on:click="signUp" class="form-submit">Đăng Ký</button>
            <p class="loginhere">
                Đã Có Tài Khoản ? <router-link to="/login">Đăng Nhập</router-link>
            </p>
        </div>
    </div>
</section>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name:"SignView",
    data() {
        return {
            hoTen:'',
            email:'',
            matKhau:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("https://localhost:7048/api/Users/create_nguoidung",{
                hoTen:this.hoTen,
                email:this.email,
                matKhau:this.matKhau
            });
            console.warn(result);
            if(result.status==200){
                alert("Đăng Ký Tài Khoản Thành Công");
                localStorage.setItem("users",JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style scoped>
a{
    color: #222;
}
.container {
    width: 660px;
    position: relative;
    margin: 0 auto;
}
.signup-content {
    background: #f7f7f7;
    padding: 50px 85px;
}
form {
    display: block;
    margin-top: 0em;
}
h2.form-title {
    width: 100%;
    display: block;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    height: 55px;
}
.form-group {
    overflow: hidden;
    margin-bottom: 20px;
}
.form-input {
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
input[type=checkbox]:not(old) {
    width: 2em;
    margin: 0;
    padding: 0;
    font-size: 1em;
    display: none;
}
input[type=checkbox]:not(old) + label {
    display: inline-block;
    margin-top: 7px;
    margin-bottom: 25px;
}

.label-agree-term {
    font-size: 12px;
    font-weight: 600;
    color: #555;
}
input[type=checkbox]:not(old) + label > span {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 15px;
    margin-bottom: 3px;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    background: white;
    background-image: -moz-linear-gradient(white, white);
    background-image: -ms-linear-gradient(white, white);
    background-image: -o-linear-gradient(white, white);
    background-image: -webkit-linear-gradient(white, white);
    background-image: linear-gradient(white, white);
    vertical-align: bottom;
}

.label-agree-term {
    font-size: 12px;
    font-weight: 600;
    color: #555;
}
.term-service {
    color: #555;
}
.form-submit {
    width: 100%;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    padding: 17px 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    border: none;
    background-image: -moz-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -ms-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -o-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -webkit-linear-gradient(to left, #74ebd5, #9face6);
    background-image: linear-gradient(to left, #74ebd5, #9face6);
}
.main {
    background: #f2f2f2;
}
p {
    font-size: 15px;
    font-family: "Nunito Sans", sans-serif;
    color: #3d3d3d;
    font-weight: 400;
    line-height: 25px;
    margin: 15px 0 41px 0;
}
</style>