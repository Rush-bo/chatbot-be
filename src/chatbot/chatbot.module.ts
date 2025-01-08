import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { DatabaseModule } from '../database/database.module';
import { LangflowModule } from '../langflow/langflow.module';

@Module({
  imports: [DatabaseModule, LangflowModule],
  controllers: [ChatbotController],
  providers: [ChatbotService],
})
export class ChatbotModule {}
