import { revalidatePath } from "next/cache";

export async function POST(request) {
  const token = request.headers.get("authorization");

  if (token !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    revalidatePath("/");

    return Response.json({
      revalidated: true,
      message: "Homepage revalidated successfully",
    });
  } catch (error) {
    return new Response(`Error revalidating: ${error.message}`, {
      status: 500,
    });
  }
}
