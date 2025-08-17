// app/api/shot/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  const w = Number(searchParams.get("w") ?? 1200);
  const h = Number(searchParams.get("h") ?? 630);
  const delay = Number(searchParams.get("delay") ?? 0);
  if (!target) return new Response("Missing url", { status: 400 });

  // Microlink request (JSON -> follow screenshot.url)
  const upstream = new URL("https://api.microlink.io/");
  upstream.search = new URLSearchParams({
    url: target,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": "true",
    "viewport.deviceScaleFactor": "1",
    "viewport.width": String(w),
    "viewport.height": String(h),
    waitForTimeout: String(delay),
  }).toString();

  const res = await fetch(upstream, { next: { revalidate: 86400 } }); // 24h

  if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
    const json = await res.json();
    const url = json?.data?.screenshot?.url as string | undefined;
    if (url) {
      const img = await fetch(url, { next: { revalidate: 86400 } });
      if (img.ok) {
        return new Response(await img.arrayBuffer(), {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control":
              "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        });
      }
    }
  }

  // Final placeholder (put a file in /public)
  const placeholder = new URL("/fallback-image.png", req.url);
  const ph = await fetch(placeholder);
  return new Response(await ph.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=300",
    },
  });
}
