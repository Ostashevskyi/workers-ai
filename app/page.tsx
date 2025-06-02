"use client";

import { useCallback, useState } from "react";

export default function Home() {
  const selectedModel = "@cf/black-forest-labs/flux-1-schnell";
  const [prompt, setPrompt] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch("/app/api/generate_image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: selectedModel, prompt }),
      });

      setGeneratedImage(await response.text());
    } catch (error) {
      console.error("Error generating image:", error);
    }
  }, [selectedModel, prompt]);

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
    </div>
  );
}
