const http = require("http")
const fs = require("fs")

const html = `
<!doctype html>
<title>Lab Login</title>
<h2>Wireshark Demo</h2>
<form method="POST" enctype="multipart/form-data">
	Secret File: <input name="secretFile" type="file"/><br/>
	Password File: <input name="passwordFile" type="file"/><br/><br/>
<input type="submit" value ="Submit"/>
</form>
`;

http.createServer((req,res)=> {
	if(req.method === "POST"){
		const chunks = [];
		req.on("data", chunk => chunks.push(chunk));
		req.on("end", () => {
			const buf = Buffer.concat(chunks);
			fs.writeFileSync('raw_multipart.bin', buf);
			console.log("Saved raw multipart to raw_multipart.bin (size: ", buf.length, 'bytes)');
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
