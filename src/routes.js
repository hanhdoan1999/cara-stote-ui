// routes.js
import Home from './components/Home.vue';
import Shop from './components/Shop';
import Features from './components/Features';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import BlogDetail from './components/BlogDetail'

const routes = [
    { path: '/',  name: 'Home',component: Home },
    { path: '/shop', name: 'Shop', component: Shop },
    { path: '/features', name: 'Features',component: Features },
    { path: '/blog',  name: 'Blog',component: Blog },
    { path: '/about',  name: 'About',component: About },
    { path: '/contact',  name: 'Contact',component: Contact },
    // { path: '/product', component: ProductDetail },
    {path:'/blog-detail',component:BlogDetail},
    {
        path: '/product/:productId',
        name: 'product',
        component: ProductDetail
      }
];
export default routes;