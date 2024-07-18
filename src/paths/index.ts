export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    resetPassword: "/auth/reset-password",
    createNewPassword: "/auth/create-new-password",
  },
  admin: {
    // product
    products: "/admin/products",
    editProduct: "/admin/products/edit",
    detail: "/admin/products/detail",
    createProduct: "/admin/products/create-product",
    // project
  },
  app: {
    overview: "/app",
    account: "/app/account",
    customers: "/app/customers",
    integrations: "/app/integrations",
    settings: "/app/settings",
    // project
  },
  errors: { notFound: "/errors/not-found" },
  share: {
    share: "/share/{{id}}",
  },
} as const;
