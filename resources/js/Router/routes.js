const routes = [
    {                
        name: "home",
        path: "/home", 
        alias: ['/', ''],
        component: () => import("../Views/Home.vue"),
    },
    {
        name: "main",
        component: () => import("../Views/Main.vue"),
        path: "/main", 
    },
    {
        name: "history",
        component: () => import("../Views/History.vue"),
        path: "/history", 
    },/*
    {
        name: "notFound",
        component: () => import("../Pages/NotFound.vue"),
        path: "/:catchAll(.*)", 
    }, */
];

export default routes;