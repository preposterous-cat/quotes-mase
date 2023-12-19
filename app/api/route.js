import translate from "google-translate-api-x";

export async function POST(request) {
  const res = await request.json();
  // console.log(res);
  const res_translate = await translate(res[0].content, { to: "id" });
  return Response.json({ res_translate });
}
