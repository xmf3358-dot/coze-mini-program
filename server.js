const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const http = require("http");

const app = express();
const PORT = 5000;
const STATIC_DIR = __dirname;
const PROJECT_ROOT = path.resolve(__dirname, "..");

// 启动后端
console.log("[系统] 正在启动后端服务...");
const backend = spawn("node", [path.join(PROJECT_ROOT, "server", "dist", "main.js")], {
  cwd: path.join(PROJECT_ROOT, "server"),
  stdio: "pipe",
  env: { ...process.env },
  shell: true
});

backend.stdout.on("data", (d) => process.stdout.write(`[后端] ${d}`));
backend.stderr.on("data", (d) => process.stderr.write(`[后端] ${d}`));
backend.on("close", (code) => console.log(`[系统] 后端进程退出 (${code})`));

// 等待后端就绪
const waitForBackend = () => new Promise((resolve) => {
  const tryConnect = () => {
    const req = http.get("http://localhost:3000/api/health", (res) => {
      console.log("[系统] 后端已就绪");
      resolve();
    });
    req.on("error", () => setTimeout(tryConnect, 500));
    req.end();
  };
  setTimeout(tryConnect, 1000);
});

// 手动代理 /api 请求（零依赖）
app.use("/api", (req, res) => {
  const options = {
    hostname: "localhost",
    port: 3000,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: "localhost:3000" }
  };
  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  proxyReq.on("error", () => {
    res.status(502).json({ code: 502, msg: "后端服务不可用" });
  });
  req.pipe(proxyReq);
});

// 静态文件
app.use(express.static(STATIC_DIR));

// SPA 路由 fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(STATIC_DIR, "index.html"));
});

waitForBackend().then(() => {
  app.listen(PORT, () => {
    console.log("========================================");
    console.log("  捐赠项目智能管理系统");
    console.log("========================================");
    console.log(`  前端: http://localhost:${PORT}`);
    console.log(`  后端: http://localhost:3000`);
    console.log("  按 Ctrl+C 停止");
    console.log("========================================");
  });
});
