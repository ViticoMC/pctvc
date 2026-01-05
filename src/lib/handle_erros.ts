import { ApiError, NetworkError, ValidationError } from "./errors";

export const handleApiError = (error: any, endpoint: string) => {
  // No hay respuesta: network / CORS / timeout
  if (!error || !error.response) {
    return new NetworkError("No se pudo conectar con el servidor");
  }

  const status = error.response?.status ?? 0;
  const data = error.response?.data;

  // Validación: 400 o 422 con fields
  if (status === 400 || status === 422) {
    return new ValidationError(
      data?.message || "Datos inválidos",
      data?.fields
    );
  }

  // No autorizado
  if (status === 401 || status === 403) {
    return new ApiError("No autorizado", status, endpoint, data, error);
  }

  // Conflicto / recurso no encontrado (opcional)
  if (status === 404) {
    return new ApiError("No encontrado", status, endpoint, data, error);
  }

  // Errores de servidor
  if (status >= 500) {
    return new ApiError("Error del servidor", status, endpoint, data, error);
  }

  // Genérico
  return new ApiError(
    data?.message || "Error desconocido",
    status,
    endpoint,
    data,
    error
  );
};
