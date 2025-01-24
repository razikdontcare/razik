import { notFound, redirect } from "next/navigation";

async function getTargetUrl(id) {
  const response = await fetch(`${process.env.BASE_URL}/api/read?id=${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    notFound();
  }
  const data = await response.json();
  return data.target;
}

export async function GET(request, props) {
  const params = await props.params;
  const targetUrl = await getTargetUrl(params.url);

  if (!targetUrl) {
    return notFound();
  }

  return redirect(targetUrl);
}
