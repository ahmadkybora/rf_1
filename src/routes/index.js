import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Home from "../components/layouts/home";
import Users from "../components/panel/users";
import Dashboard from "../components/panel/dashboard";

export const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/panel/dashboard', component: Dashboard },
    { path: '/panel/users', component: Users },
]