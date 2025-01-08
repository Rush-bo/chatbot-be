// src/chatbot/chatbot.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LangflowService } from '../langflow/langflow.service';

@Injectable()
export class ChatbotService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly langflowService: LangflowService,
  ) {}

  async handlePredefinedFlow(input: string, session: any) {
    if (!session.data) {
      session.data = {
        bhk: null,
        sqft: null,
        locality: null,
      };
    }

    if (!session.data.bhk) {
      session.data.bhk = input;
      return 'Got it! How much square feet do you prefer?';
    } else if (!session.data.sqft) {
      session.data.sqft = input;
      return 'Thanks! Which locality are you interested in?';
    } else if (!session.data.locality) {
      session.data.locality = input;
      session.completedFlow = true; // Mark the flow as complete
      return 'Thank you! I’ve gathered all the details. You can now ask me any related questions, like nearby facilities or price comparisons.';
    }
    
    return 'I’m sorry, I didn’t understand. Please answer the current question.';
  }

  async handleFreeFormQuery(query: string, context: any) {
    const contextString = JSON.stringify(context);
    const response = await this.langflowService.getResponse(query, contextString);
    return response;
  }
}