import type { Config } from './config.js';

export const DEFAULT_MODELS: Record<string, string> = {
  anthropic: 'claude-sonnet-4-6',
  openai: 'gpt-5.2',
  google: 'gemini-2.5-flash',
  openrouter: 'anthropic/claude-sonnet-4-6',
};

export const RECOMMENDED_MODELS: Record<string, string[]> = {
  anthropic: ['claude-opus-4-6', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
  openai: ['gpt-5.2', 'gpt-5.2-pro', 'gpt-5.2-codex'],
  google: ['gemini-3.1-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-2.5-pro'],
  openrouter: ['anthropic/claude-sonnet-4-6', 'openai/gpt-5.2', 'google/gemini-2.5-flash'],
};

export async function getModel(config: Config) {
  const modelId = config.model ?? DEFAULT_MODELS[config.provider] ?? 'gpt-4o';

  switch (config.provider) {
    case 'anthropic': {
      const { createAnthropic } = await import('@ai-sdk/anthropic');
      return createAnthropic({ apiKey: config.apiKey })(modelId);
    }
    case 'openai': {
      const { createOpenAI } = await import('@ai-sdk/openai');
      return createOpenAI({ apiKey: config.apiKey })(modelId);
    }
    case 'google': {
      const { createGoogleGenerativeAI } = await import('@ai-sdk/google');
      return createGoogleGenerativeAI({ apiKey: config.apiKey })(modelId);
    }
    case 'openrouter': {
      const { createOpenAI } = await import('@ai-sdk/openai');
      return createOpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: config.apiKey,
      })(modelId);
    }
    case 'custom': {
      const { createOpenAI } = await import('@ai-sdk/openai');
      return createOpenAI({
        baseURL: config.baseUrl!,
        apiKey: config.apiKey,
      })(modelId);
    }
    default:
      throw new Error(`Unknown provider: ${config.provider}`);
  }
}
