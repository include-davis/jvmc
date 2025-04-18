/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  script-src 'self' https://apis.google.com https://www.gstatic.com https://maps.googleapis.com 'unsafe-inline' 'unsafe-eval';
  script-src-elem 'self' https://apis.google.com https://www.gstatic.com 'unsafe-inline';
  style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
  img-src 'self' https://*.googleusercontent.com https://res.cloudinary.com data: https://cms.joanviterimemorialclinic.com;
  font-src 'self' https://fonts.gstatic.com data:;
  frame-src https://calendar.google.com https://www.google.com/maps https://maps.google.com https://*.google.com https://cms.joanviterimemorialclinic.com;
  connect-src 'self' https://*.googleapis.com https://cms.joanviterimemorialclinic.com;
  `;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
