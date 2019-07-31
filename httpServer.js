const http = require("http");
const fs = require("fs");
const path = require("path");

const json = require('./cars');
const { cars } = json;

let carsHtml = '';
json.cars.forEach((element) => {
  carsHtml += `<a style="display:block" href="/${element.model}"><span>${element.model}</span> <span>${element.price}$</span></a>`;
})
const server = http.createServer((req, res) => {
  
if(req.url === '/') {
    res.writeHead(200, {
      "Content-Type": 'text/html'
    });
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Мы продаем машины</h1>
    ${carsHtml}
</body>
</html>
    `);
}
cars.forEach(element =>{
  console.log(element);
  if(req.url === `/${element.model}`){
    res.writeHead(200, {
      "Content-Type": 'text/html'
    });
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style></style>
</head>
<body>
    <h1>Мы продаем машины</h1>
    <div>
    <img width="100%" src="${element.photo}">
    <h1>${element.model} ${element.price}$</h1>
    <p>${element.desc}</p>
    </div>
</body>
</html>
    `);
  }
})
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Listening on port 3000");
});

