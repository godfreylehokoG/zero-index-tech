import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
const organizationJsonLdScript =
  /<script type="application\/ld\+json">([^<]+)<\/script>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  const [, structuredData] = html.match(organizationJsonLdScript) ?? [];

  assert.ok(structuredData, "renders organization JSON-LD");
  assert.deepEqual(JSON.parse(structuredData), {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zero Index",
    alternateName: ["Zero Index Consulting", "Zero Index Technologies"],
    url: "https://zeroindex.co.za",
    logo: "https://zeroindex.co.za/zero-index-mark.png",
    email: "hello@zeroindex.co.za",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressCountry: "ZA",
    },
    sameAs: ["https://www.linkedin.com/company/zero-index-technologies/"],
  });
});
