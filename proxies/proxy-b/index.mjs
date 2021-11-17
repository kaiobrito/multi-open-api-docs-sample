import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { mergeSchemas } from "./src/mergeSchemas.mjs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8081; // default port to listen
const FOO_API_HOST = "http://localhost:8001";

const fooProxy = createProxyMiddleware("/api", {
  target: FOO_API_HOST,
});

app.get("/api/schema", async (req, res) => {
  res.json(
    await mergeSchemas([`${FOO_API_HOST}/api/schema?format=openapi-json`])
  );
});
app.get("/api/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "htmls", "docs.html"));
});
app.use("/api/foo", fooProxy);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
