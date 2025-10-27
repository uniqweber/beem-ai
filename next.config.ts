// next.config.ts

import {NextConfig} from "next";
import nextIntl from "next-intl/plugin";

const withNextIntl = nextIntl("./i18n/request.ts");

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default withNextIntl(nextConfig);
