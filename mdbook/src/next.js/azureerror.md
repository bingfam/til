# 오라클 연결할 때 azure 관련 에러

오라클 연결해 사용하려 하면 webpack에서 

`Module not found: Can't resolve '@azure/app-configuration'`

에러가 발생할 경우 처리 방법.

next.js 14 이상인 경우, next.config.ts에서 

> serverExternalPackages: ["oracledb"]

를 추가하면 된다. 

**next.config.ts**
```
import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false,
  }, 

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  serverExternalPackages: ["oracledb"],
};

export default nextConfig;
```