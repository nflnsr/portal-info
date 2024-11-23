const SERVER_PORT = 4000;

enum ResponseType {
    SUCCESS = "success",
    CREATED = "created",
    UNAUTHORIZED = "unauthorized",
    FORBIDDEN = "forbidden",
    CLIENT_ERROR = "clien_error",
    NOT_FOUND = "not_found",
    SERVER_ERROR = "server_error"
  }

export { SERVER_PORT, ResponseType };