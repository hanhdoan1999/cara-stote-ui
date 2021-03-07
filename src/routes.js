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
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/features', component: Features },
    { path: '/blog', component: Blog },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/product', component: ProductDetail },
    {path:'/blog-detail',component:BlogDetail}
];
export default routes;