import { redirect } from "next/navigation";

async function getTargetUrl(id) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/read?id=${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch target URL");
    }
    const data = await response.json();
    return data.target;
  } catch (error) {
    console.error("Error fetching target URL:", error);
    return null;
  }
}

export async function GET(request, props) {
  const params = await props.params;
  const targetUrl = await getTargetUrl(params.url);

  if (targetUrl) {
    return redirect(targetUrl);
  } else {
    return new Response("URL Not Found. Please check the URL and try again.", {
      status: 404,
    });
  }
}
