import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { I18nProvider } from "../lib/i18n";
import { reportAppError } from "../lib/error-reporting";
import { getSiteUrl } from "../lib/siteUrl";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("App Runtime Error:", error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Telc-success" },
      {
        name: "description",
        content:
          "Telc-success: Sprachprüfungen von A1 bis C2, Lehrmaterialien und Fortbildungen.",
      },
      { name: "author", content: "Telc-success" },
      { property: "og:site_name", content: "Telc-success" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:image", content: "https://telcsuccess.org/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://telcsuccess.org/favicon.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "alternate", hrefLang: "de", href: "https://telcsuccess.org/" },
      { rel: "alternate", hrefLang: "en", href: "https://telcsuccess.org/?lang=en" },
      { rel: "alternate", hrefLang: "es", href: "https://telcsuccess.org/?lang=es" },
      { rel: "alternate", hrefLang: "tr", href: "https://telcsuccess.org/?lang=tr" },
      { rel: "alternate", hrefLang: "x-default", href: "https://telcsuccess.org/" },
    ],
  }),

  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { Toaster } from "sonner";
import { FloatingWhatsApp } from "../components/site/FloatingWhatsApp";

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
      <Toaster position="top-right" richColors />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}

