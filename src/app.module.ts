import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemsStatementModule } from './problems-statement/problems-statement.module';

@Module({
  imports: [ProblemsStatementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
