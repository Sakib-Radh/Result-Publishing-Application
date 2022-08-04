import { createRouter, createWebHistory } from "vue-router";
import DashboardIndex from '../components/DashboardIndex.vue'
import LoginIndex from '../components/LoginIndex.vue'
import RegisterIndex from "../components/RegisterIndex.vue"
// import store from '../store'
import AuthLayout from '../components/AuthLayout.vue'
import AdminLogin from '../components/AdminLogin.vue'
import AdminOrUser from '../components/AdminOrUser.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import StudentDetails from '../components/StudentDetails.vue'
import AdminSection from '../components/AdminSection.vue'
import store from "@/store";


const routes = [

    // {
    //     path: '/admin/dashboard',
    //     name: 'AdminDashboard',
    //     component: AdminDashboard,
    //     beforeEnter: adminVerification
    // },

    {
        path: '/admin',
        redirect: '/admin/dashboard',
        name: 'AdminSection',
        component: AdminSection,
        beforeEnter: adminVerification,
        meta: {
            requiresAuth: true,
        },

        children: [
            {
                path: '/students/details',
                name: 'StudentDetails',
                component: StudentDetails,
            },
        
            {
                path: '/admin/dashboard',
                name: 'AdminDashboard',
                component: AdminDashboard,
            },
        ]
    },


    {
        path: '/admin-or-user',
        name: 'AdminOrUser',
        component: AdminOrUser,
        // beforeEnter: isLoggedIn,

    },

    

    {
        path: '/',
        redirect: '/admin-or-user',
        name: 'Auth',
        component: AuthLayout,
        // beforeEnter: isLoggedIn,
        meta: {
            isGuest: true
        },
        children: [

            {
                path: '/login',
                name: 'LoginIndex',
                component: LoginIndex
            },

            {
                path: '/register',
                name: 'RegisterIndex',
                component: RegisterIndex
            },

            {
                path: '/admin/login',
                name: 'AdminLogin',
                component: AdminLogin,
                // beforeEnter: isLoggedIn,
           },
        ]

    },

    {
        path: '/student/dashboard',
        name: 'DashboardIndex',
        component: DashboardIndex,
        beforeEnter: studentVerification,
        meta: {
            requiresAuth: true
        }
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function adminVerification(to, from, next) {
    if(store.state.admin.token){
     next()
    }else if(store.state.user.token){
        next({name: 'DashboardIndex'})
    }else{
        naxt({name: 'AdminOrUser'})
    }
 }

 function studentVerification(to, from, next) {
    if(store.state.user.token){
     next()
    }else if(store.state.admin.token){
        next({name: 'AdminDashboard'})
    }else{
        naxt({name: 'AdminOrUser'})
    }
 }

router.beforeEach((to, from, next)=>{
 if(to.meta.isGuest && store.state.admin.token){
    next({name: 'AdminDashboard'})
 }else if(to.meta.isGuest && store.state.user.token){
    next({name: 'DashboardIndex'})
 }else{
    next()
 }
})

export default router;