export const router = new Vaadin.Router(document.querySelector("#root"));

router.setRoutes([
  {
    path: "/login",
    component: "page-login",
    action: async () => {
      await import("./pages/login/page-login");
    },
  },
  {
    path: "/",
    component: "page-index",
    action: async () => {
      await import("./pages/page-index");
    },
    children: [
      {
        path: "/math",
        component: "page-math",
        action: async () => {
          await import("./pages/math/page-math");
        },
        children: [
          {
            path: "/",
            component: "page-set-theory",
            action: async () => {
              await import("./pages/math/set-theory/page-set-theory");
            },
          },
        ],
      },
      {
        path: "/programming",
        component: "page-programming",
        action: async () => {
          await import("./pages/programming/page-programming");
        },
        children: [
          {
            path: "/",
            component: "page-rust",
            action: async () => {
              await import("./pages/programming/rust/page-rust");
            },
          },
        ],
      },
      {
        path: "/video",
        component: "page-video",
        action: async () => {
          await import("./pages/video/page-video");
        },
        children: [],
      },
    ],
  },
]);
