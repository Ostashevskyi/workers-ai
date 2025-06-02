export interface Env {
  AI: {
    run: (
      model: string,
      inputs: Record<string, unknown>
    ) => Promise<{ image: string }>;
  };
}
