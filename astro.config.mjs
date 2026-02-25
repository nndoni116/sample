import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare'; // 1. これを追加

export default defineConfig({
  integrations: [tailwind()],
  // 2. outputを 'server' または 'hybrid' に設定
  output: 'server', 
  // 3. アダプターを指定
  adapter: cloudflare(), 
});