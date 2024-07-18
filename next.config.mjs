import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzerFn from "@next/bundle-analyzer";
const withBundleAnalyzer = withBundleAnalyzerFn({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
