/**
 * 把 react-plugin-component 聚合产物 `demos/` 同步进本站点。
 *
 * 为什么不直接 `cp -r demos/* .`：vite 产物带内容哈希，叠加复制会把历史哈希的
 * 旧资源越攒越多（本站 vane-file-preview 曾堆到 34MB，实际产物只有 20MB）。
 * 所以每个包目录都是「先删后铺」，保证站点里只有当前这次构建的产物。
 *
 * 用法：
 *   node scripts/sync-demos.mjs                  # 默认读 ../react-plugin-component/demos
 *   node scripts/sync-demos.mjs D:/other/demos   # 指定源目录
 *
 * 首页卡片不在这里生成——index.html 是手写的，加组件要自己补卡片与计数。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const SRC = path.resolve(process.argv[2] ?? path.join(SITE, "..", "react-plugin-component", "demos"));

if (!fs.existsSync(SRC)) {
  console.error(`✗ 找不到 demos 产物目录：${SRC}`);
  console.error("  先跑 react-plugin-component 的 node scripts/build-demos.mjs");
  process.exit(1);
}

const pkgs = fs
  .readdirSync(SRC, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name.startsWith("vane-"))
  .map((e) => e.name)
  .sort();

if (!pkgs.length) {
  console.error(`✗ ${SRC} 里没有 vane-* 演示台目录`);
  process.exit(1);
}

const kb = (n) => `${Math.round(n / 1024)} KB`;
const size = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).reduce((n, e) => {
    const full = path.join(dir, e.name);
    return n + (e.isDirectory() ? size(full) : fs.statSync(full).size);
  }, 0);

console.log(`→ ${SRC}  →  ${SITE}`);
let total = 0;
for (const name of pkgs) {
  const dest = path.join(SITE, name);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(path.join(SRC, name), dest, { recursive: true });
  const bytes = size(dest);
  total += bytes;
  console.log(`  ✓ ${name}  ${kb(bytes)}`);
}

// demos/ 根上的 _audit.html 是开发期的对比度体检页，不外发，故不复制。

console.log(`\n✓ ${pkgs.length} 个演示台已同步 · 合计 ${kb(total)}`);
console.log("  记得手改 index.html：组件卡与首页计数（组件包数 / 内置插件数）");
