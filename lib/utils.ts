export function getCareerYearsTenths(startMonth: string, now = new Date()): string {
  const start = new Date(startMonth);
  if (Number.isNaN(start.getTime())) return "0.0";

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  return (Math.max(0, months) * 0.1).toFixed(1);
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Open portfolio PDFs in an HTML viewer so the tab uses the K favicon */
export function documentViewUrl(file: string, title: string) {
  const params = new URLSearchParams({ src: file, title });
  return `/view?${params.toString()}`;
}

export function projectHref(project: { href?: string; file?: string; title: string }) {
  if (project.href) return project.href;
  if (project.file) return documentViewUrl(project.file, project.title);
  return undefined;
}
