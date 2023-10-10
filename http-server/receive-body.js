const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method } = request;

  if (method === "GET") {
    response.end("<h1>Ini Hello GET!</h1>");
  }

  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk); // proses membaca body (hasilnya adalah buffer)
    });

    request.on("end", () => {
      // setelah request nya selesai
      body = Buffer.concat(body).toString(); // body akan diubah menjadi string
      response.end(`<h1>Hai, ${body}!</h1>`);
    });

    response.end("Ini adalah method post");
  }

  if (method === "PUT") {
    response.end("<h1>Bonjour!</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Salam!</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
