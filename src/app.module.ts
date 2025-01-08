import { Module } from '@nestjs/common';
import { ChatbotModule } from './chatbot/chatbot.module';
import { DatabaseModule } from './database/database.module';
import { LangflowModule } from './langflow/langflow.module';

@Module({
  imports: [ChatbotModule, DatabaseModule, LangflowModule],
})
export class AppModule {}
