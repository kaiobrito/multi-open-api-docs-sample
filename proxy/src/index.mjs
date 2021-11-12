import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { mergeSchemas } from "./mergeSchemas.mjs";

const app = express();
const port = 8080; // default port to listen
const FOO_API_HOST = "http://localhost:8001";
const BAR_API_HOST = "http://localhost:8002";

const fooProxy = createProxyMiddleware("/api", {
  target: FOO_API_HOST,
});

const barProxy = createProxyMiddleware("/api", {
  target: BAR_API_HOST,
});

app.get("/api/schema", async (req, res) => {
  res.json(
    await mergeSchemas([
      `${FOO_API_HOST}/api/schema?format=openapi-json`,
      `${BAR_API_HOST}/api/schema?format=openapi-json`,
    ])
  );
});
app.use("/api/foo", fooProxy);
app.use("/api/bar", barProxy);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
