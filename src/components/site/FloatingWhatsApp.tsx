import { useRouterState } from "@tanstack/react-router";

export function FloatingWhatsApp() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  // Do not display on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <a
      href="https://wa.me/4917614433079"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.372-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.901a9.825 9.825 0 0 1 2.891 6.994c-.001 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.594 5.945L0 24l6.337-1.664a11.87 11.87 0 0 0 5.717 1.457h.006c6.555 0 11.89-5.335 11.893-11.893c0-3.181-1.238-6.167-3.487-8.414" />
      </svg>
    </a>
  );
}
