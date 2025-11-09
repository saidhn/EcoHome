export async function POST(req) {
  const data = await req.json();

  // تحقق من البيانات server-side
  if (!data.name || !data.email || !data.message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }


  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
