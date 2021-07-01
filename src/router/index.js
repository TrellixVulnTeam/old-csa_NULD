import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundPage from '../views/404.vue'
import Login from '../views/Login.vue'
import TechSupportDashboard from '../views/TechSupportDashboard.vue'
import User from '../views/User.vue'
import Institution from '../views/Institution.vue'
import Misc from '../views/Misc.vue'
import store from '../store/index';
import ImportOrder from '../views/ImportOrder.vue'
import Orders from '../views/Orders.vue'
import CSAMerge from '../views/CSAMerge.vue'
import CSASplit from '../views/CSASplit.vue'
import Subscription from '../views/Subscription.vue'
import Tenant from '../views/Tenant.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		// path: '/',
		path: '/',
		alias: '/home',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		path: '/about',
		// path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/techboard',
		name: 'TechBoard',
		component: TechSupportDashboard,
		meta: { requiresAuth: true }

	},
	{
		path: '/orders',
		name: 'Orders',
		component: Orders,
		meta: { requiresAuth: true }

	},
	{
		path: '/misc',
		name: 'Misc',
		component: Misc,
		meta: { requiresAuth: true }

	},
	{
		path: '/user',
		name: 'User',
		component: User,
		meta: { requiresAuth: true },
		props: true,

	},
	{
		path: '/institution',
		name: 'Institution',
		component: Institution,
		meta: { requiresAuth: true },
		props: true,
	},
	{
		path: '/importOrder',
		name: 'ImportOrder',
		component: ImportOrder,
		meta: { requiresAuth: true },
		props: true,
	},
	{
		path: '/merge',
		name: 'CSAMerge',
		component: CSAMerge,
		meta: { requiresAuth: true },
		props: true,
	},
	{
		path: '/split',
		name: 'CSASplit',
		component: CSASplit,
		meta: { requiresAuth: true },
		props: true,
	},
	{
		path: '/subscription',
		name: 'Subscription',
		component: Subscription,
		meta: { requiresAuth: true },
		props: true,
	},
	{
		path: '/umbrella',
		name: 'Tenant',
		component: Tenant,
		meta: { requiresAuth: true },
		props: true,
	},






	// !! 404 Must be last route !!
	{
		path: '*',
		name: '404',
		component: NotFoundPage
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	let initialPromise = new Promise((resolve) => resolve());
	if (!location.href.includes("login")) {
		initialPromise = store.dispatch('platform/app/initApi', { logout: false });
	}
	initialPromise.finally(() => {
		if (to.matched.some(record => record.meta.requiresAuth)) {
			// this route requires auth, check if logged in
			// if not, redirect to login page.
			if (!store.state.platform.app.jti) {
				next({
					path: '/login',
					query: { redirect: to.fullPath }
				})
			} else {
				next()
			}
		} else {
			next() // make sure to always call next()!
		}
	});

})

export default router
