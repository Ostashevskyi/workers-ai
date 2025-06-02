import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(request: NextRequest) {
//   const context = getRequestContext();
//   const { env } = context; 
//   const ai = env.AI

//   const body = await request.json();

//   let { prompt, model } = body as {prompt: string, model?: string};
//   if (!model) model = "@cf/black-forest-labs/flux-1-schnell";

//   const inputs = { prompt };
//   const res = await ai.run(model, inputs);
//   return new Response(`data:image/png;base64,${res.image}`, {
//     headers: {
//       "Content-Type": "image/png",
//     },
//   });
}
