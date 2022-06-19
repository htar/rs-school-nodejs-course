export function responseWithHeaders(statusCode, content, response) {
  response.writeHead(status, {
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(content));
}
