import translate from "google-translate-api-x";

export async function GET(request) {
  const res_quote = await fetch("https://api.quotable.io/quotes/random", {
    cache: "no-store",
  });
  const quote = await res_quote.json();

  const res_translate = await translate(quote[0].content, { to: "id" });

  return Response.json({ res_translate });
}
