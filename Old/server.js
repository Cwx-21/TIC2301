const http = require("http")
const html = `
<!doctype html>
<title>Lab Login</title>
<h2>Wireshark Demo</h2>
<form method="POST">
	Username: <input name="username"/><br/>
	Password: <input name="password" type="password"/><br/>
	Secret File: <input name="secretFile" type="file"/><br/>
	Password File: <input name="passwordFile" type="file"/><br/><br/>
<input type="submit" value ="Login"/>
</form>
`;

http.createServer((req,res)=> {
	if(req.method === "POST"){
		var body = "";
		req.on("data", chunk => (body += chunk));
		req.on("end", () => {
			console.log("Received form data: ", body);
			res.end("OK - form received!");
		});
	}
	else {
		res.writeHead(200, {"Content-Type": "text/html" });
		res.end(html);
	}
}).listen(8080, "127.0.0.1", () =>
	console.log(" Server is running on  http://127.0.0.1:8080/")
);
