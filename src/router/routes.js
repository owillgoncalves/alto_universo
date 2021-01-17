const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/courses",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Courses.vue") }]
  },
  {
    path: "/jobs",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Jobs.vue") }]
  },
  {
    path: "/new-product",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewProduct.vue") }]
  },
  {
    path: "/new-job",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewJob.vue") }]
  },
  {
    path: "/new-course",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewCourse.vue") }]
  },
  {
    path: "/rate-student",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/RateStudent.vue") }]
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
