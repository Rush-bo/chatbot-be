import { Controller, Post, Body, Session } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('query')
  async handleQuery(@Body('query') query: string, @Session() session: any) {
    if (session.completedFlow) {
      return await this.chatbotService.handleFreeFormQuery(query, session.data);
    }
    return await this.chatbotService.handlePredefinedFlow(query, session);
  }
}