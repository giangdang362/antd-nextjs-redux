declare namespace API {
  type SignUpParams = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  type LogoutPayload = {
    token: string;
  };
  type LogoutResponse = {
    logout: boolean;
  };

  // Query string XXXXQuery
  // Post body XXXPayload
  //
  type RefreshTokenParams = {
    refreshToken?: string | null;
  };

  type SignInWithOAuthParams = {
    provider: "google" | "discord";
  };

  type SignInWithPasswordPayload = {
    email: string;
    password: string;
    isRememberMe: boolean;
  };

  type SignInWithPasswordResponse = {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
    expiresAt?: number;
    user?: UserItem;
  };

  type ResetPasswordParams = {
    email: string;
  };
  type Role = {
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    id: number;
    slug: string;
    name: string;
    permissions: string[];
    isCanEdit: boolean;
    isActive: boolean;
    roleId?: string;
    parent?: string;
  };
}
