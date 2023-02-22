export class StatusError extends Error {
  static badRequest(message) {
    return new StatusError(400, message || "badRequest");
  }
  static unauthorized(message) {
    return new StatusError(401, message || "unAuthorizedAccess");
  }
  static forbidden(message) {
    return new StatusError(403, message || "forbidden");
  }
  static notFound(message) {
    return new StatusError(404, message || "notFound");
  }
  static notAccepted(message) {
    return new StatusError(406, message || "notAccepted");
  }
  static serverError(message) {
    return new StatusError(500, message || "serverError");
  }
  static badGateway(message) {
    return new StatusError(502, message || "badGateWay");
  }
  statusCode;
  constructor(code, message) {
    super(message);
    this.statusCode = code;
  }
}
