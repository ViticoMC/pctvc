import { handleApiError } from "./handle_erros";
import { ApiError } from "./errors";
import { instance } from "./axios";

export type ApiResponse<T> =
  | { success: true; data: T; message?: string }
  | { success: false; error: string; code?: number };

class ApiClient {
  async get<T>(path: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const { data } = await instance.get<T>(path, { params });

      return { success: true, data };
    } catch (error) {
      const apiError = handleApiError(error, path);

      return {
        success: false,
        error: apiError.message,
        code: apiError instanceof ApiError ? apiError.code : undefined,
      };
    }
  }
}

export const apiClient = new ApiClient();
