import { CONFIG } from "@/shared/lib/config";

export const ENDPOINTS = {
  AUTH: {
    REGISTER: `${CONFIG.API_URL}/auth/register`,
    LOGIN: `${CONFIG.API_URL}/auth/login`,
    VERIFY_EMAIL: `${CONFIG.API_URL}/auth/verify-email`, // /:token params
    RESEND_VERIFICATION_EMAIL: `${CONFIG.API_URL}/auth/resend-verification-email`,
    FORGOT_PASSWORD: `${CONFIG.API_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${CONFIG.API_URL}/auth/reset-password`,
    CHANGE_PASSWORD: `${CONFIG.API_URL}/auth/change-password`,
    GET_USER: `${CONFIG.API_URL}/auth/me`,
    UPDATE_USER: `${CONFIG.API_URL}/auth/me`,
    REFRESH_TOKEN: `${CONFIG.API_URL}/auth/refresh-token`,
    LOGOUT: `${CONFIG.API_URL}/auth/logout`,
  },
  ADMIN: {
    GET_ALL_USERS: `${CONFIG.API_URL}/admin/users`,
    GET_USER_BY_ID: `${CONFIG.API_URL}/admin/users`, // /:id params
    SET_USER_ROLE: `${CONFIG.API_URL}/admin/users`, // /:id/role params
    DELETE_USER: `${CONFIG.API_URL}/admin/users`, // /:id params
  },
};
