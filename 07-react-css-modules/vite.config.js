import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {env} from 'node:process';
import {resolve} from 'node:path';



const isSDevMode = env.NODE_ENV.includes('development');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
    }
  },
  css: {
    devSourcemap: true, // 개발 소스맵 설정
    
    // 모듈 설정
    modules: {
      // scopeBehaviour: 'local'
      scopeBehaviour: 'local',
      // generateScopedName: (name, filename, css)=>{
      //   console.log(name, filename, css);
      //   return `_${name}_euid`;
      // },
      // local: className, hash:base64:3 -> base64 인코딩 해시 3자리
      generateScopedName: isSDevMode ? '[local]_[hash:base64:3]' // string | (name: string, filename: string, css: string) => string
      : '[hash:base64:6]',
    }

  },
});
