import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import( '../views/LoginADmin.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nhanvien',
    name: 'nhanvien',
    component: () => import( '../views/NhanVienView.vue')
  },
  {
    path: '/khachhang',
    name: 'khachhang',
    component: () => import( '../views/KhachHangView.vue')
  },
  {
    path: '/sanpham',
    name: 'sanpham',
    component: () => import( '../views/SanPhamView.vue')
  },
  {
    path: '/donhang',
    name: 'donhang',
    component: () => import( '../views/DonHangView.vue')
  },
  {
    path: '/donhang/:id',
    name: 'ctdonhang',
    component: () => import( '../views/DonHangDetails.vue')
  },
  {
    path: '/creatersanpham',
    name: 'creatersanpham',
    component: () => import( '../views/CreateSanPham.vue')
  },
  {
    path: '/updatesanpham/:maSP',
    name: 'updatesanpham',
    component: () => import( '../views/UpdateSanPham.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
