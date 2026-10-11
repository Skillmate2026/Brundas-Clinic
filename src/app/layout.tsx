import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
// import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "../../public/assets/css/style.css";
import ScrolltoTop from "@/component/ScrolltoTop";
import MobileSticky from "@/component/MobileSticky";
import DesktopFloatingActions from "@/component/DesktopFloatingActions";
import AppaddPlugin from "@/component/AppaddPlugin";
import SEOPage from "@/app/seo/page";

export const metadata: Metadata = { icons: "/assets/banners/Brunda Logo.png" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-1">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <SEOPage />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HD09G6YW8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HD09G6YW8');
          `}
        </Script>
      </head>
      <body>
        {children}
        <ScrolltoTop />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <MobileSticky />
        <DesktopFloatingActions />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script id="appadd-plugin-script" strategy="afterInteractive">
          {`
            var eppathurl = window.location.origin + window.location.pathname;
            var eptagmanage = new XMLHttpRequest();
            eptagmanage.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.response !== 0) {
                        var temp = new Array();
                        var mystr = this.response;
                        temp = mystr.split("||||||||||");
                        if (window.jQuery) {
                            window.jQuery("head").find("title").remove();
                            window.jQuery("head").append(temp[0]);
                            window.jQuery("body").append(temp[1]);
                        }
                    }
                }
            };
            eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDk0MzIxOTE4OTQmZWtleXBhc3M9dHJNd0IwTDd5SXozVjBVdGVqS0p0STVDWGNUeGdoMGw4aVZJJnNpdGV1cmw9") + eppathurl);
            eptagmanage.send();
          `}
        </Script>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <AppaddPlugin />
        </Suspense> */}
      </body>
    </html>
  );
}
