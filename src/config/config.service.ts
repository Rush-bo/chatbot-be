import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  // Other configurations...

  get langFlowUrl(): string {
    return process.env.LANGFLOW_URL || 'http://localhost:7860'; // Replace with your LangFlow server URL
  }

  get langFlowApiKey(): string {
    return process.env.LANGFLOW_API_KEY || ''; // API Key if required
  }
}
