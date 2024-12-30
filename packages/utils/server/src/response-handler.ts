import { Response } from "express";
import { ResponseCategory } from "./constants";

export const responseHandler = {
  success<T>({ res, data }: { res: Response; data: T }) {
    res.status(200).json({ success: true, data });
  },

  created<T>({ res, data }: { res: Response; data: T }) {
    res.status(201).json({ success: true, data });
  },

  noContent({ res }: { res: Response }) {
    res.status(204).end();
  },

  unauthorized({
    res,
    message = "Anda belum melakukan autentikasi",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(401).json({ error: true, message });
  },

  forbidden({
    res,
    message = "Anda tidak memiliki akses",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(403).json({ error: true, message });
  },

  badRequest({
    res,
    message = "Permintaan tidak valid",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(400).json({ error: true, message });
  },

  notFound({
    res,
    message = "Data tidak ditemukan",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(404).json({ error: true, message });
  },

  conflict({
    res,
    message = "Data yang dimasukkan sudah dipakai",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(409).json({ error: true, message });
  },

  unprocessableEntity({
    res,
    message = "Data tidak valid",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(422).json({ error: true, message });
  },

  internalServerError({
    res,
    message = "Terjadi kesalahan pada server",
  }: {
    res: Response;
    message?: string;
  }) {
    res.status(500).json({ error: true, message });
  },

  optional<T>({
    res,
    category,
    code,
    data,
    message,
  }: {
    res: Response;
    category: ResponseCategory;
    code: number;
    data?: T;
    message?: string;
  }) {
    switch (category) {
      case "informational":
      case "redirection":
        res.status(code);
        break;
      case "success":
        res.status(code).json({ success: true, data });
        break;
      case "client_error":
      case "server_error":
        res.status(code).json({ error: true, message });
        break;
      default:
        res.status(code);
        break;
    }
  },
};

// export const JsonResponse = <T>({
//   res,
//   type,
//   message,
//   data,
// }: {
//   res: Response;
//   type: ResponseStatus;
//   message: string;
//   data: T;
// }) => {
//   switch (type) {
//     case "success":
//       responseBuilder.success(res, data);
//       break;
//     case "created":
//       responseBuilder.created(res, data);
//       break;
//     case "unauthorized":
//       responseBuilder.unauthorized(res, message);
//       break;
//     case "forbidden":
//       responseBuilder.forbidden(res, message);
//       break;
//     case "bad_request":
//       responseBuilder.badRequest(res, message);
//       break;
//     case "not_found":
//       responseBuilder.notFound(res, message);
//       break;
//     case "server_error":
//       responseBuilder.serverError(res, message);
//       break;
//     default:
//       responseBuilder.success(res, data);
//   }
// };
