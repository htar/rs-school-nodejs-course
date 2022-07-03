export function responseWithHeaders(statusCode, content, response) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(content));
}
