const http = require('http');
const qs = require('querystring');
const path=require("path");
const collection=require("./mongodb1")
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end',async () => {
      const formData = qs.parse(body);
      const data={
        Name:formData.name,   
        Email:formData.email,
        Pass:formData.pass,
      }
      await collection.insertMany([data]);
      console.log("success");
      res.writeHead(600, {'Content-Type': 'text/html'});0
      console.log(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.pass}`);
      res.end(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.pass}`);
    });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(2002, () => {
  console.log('Server running on port 2002');
});