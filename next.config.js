const { type } = require('os')

module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.{glsl,vs,fs,vert,frag}': {
        loaders: ['raw-loader'], // or similar built‑in; exact values depend on your version
        as: "*.js", // treat as JavaScript module (optional, depends on your needs)
      }
    },
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}
