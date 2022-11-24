//avoid invalid env vars
!process.env.SKIP_ENV_VALIDATION && (await import("./lib/env/server.mjs"));

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
};

export default config;
