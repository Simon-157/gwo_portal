import "@/styles/global.css";
import "highlight.js/styles/agate.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GA_TRACKING_ID } from "./_document";
import { AuthProvider } from "@/contexts/authUser";

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: unknown) => {
            // @ts-ignore
            window.gtag("config", GA_TRACKING_ID, {
                page_location: url,
            });
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    useEffect(() => { }, []);
    return (
        <>
            <DefaultSeo
                title="GWO| Where writers are seeded"
                description="GWO is a 501(c)(3) non-profit organization that provides coding education and mentorship to underprivileged students, empowering them with technical skills for the future."
                titleTemplate="%s |  Generational Writers Organization"
                openGraph={{
                    type: "website",
                    locale: "en",
                    url: "https://.org",
                    site_name: "Generational Writers Organization",
                }}
            />

            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}
