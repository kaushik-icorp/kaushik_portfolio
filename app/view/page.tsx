import type { Metadata } from "next";

type Props = {
  searchParams: Promise<{ src?: string; title?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { title } = await searchParams;
  return {
    title: title ? `${title} — Kaushik` : "Document — Kaushik",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    },
  };
}

function isAllowedSrc(src: string) {
  return (
    src.startsWith("/case_studies/") ||
    src.startsWith("/landing_page/") ||
    src.startsWith("/dashboard/")
  ) && src.toLowerCase().endsWith(".pdf");
}

export default async function ViewPage({ searchParams }: Props) {
  const { src = "", title = "Document" } = await searchParams;
  const safe = isAllowedSrc(src) ? src : null;

  if (!safe) {
    return (
      <main className="flex min-h-[100dvh] items-center justify-center bg-base px-6 text-ink">
        <p className="text-ink-muted">Document not found.</p>
      </main>
    );
  }

  return (
    <main className="fixed inset-0 z-[200] flex flex-col bg-base">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{title}</p>
          <p className="text-xs text-ink-faint">Kaushik — portfolio</p>
        </div>
        <a
          href={safe}
          download
          className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          Download PDF
        </a>
      </header>
      <iframe title={title} src={safe} className="min-h-0 w-full flex-1 bg-base" />
    </main>
  );
}
