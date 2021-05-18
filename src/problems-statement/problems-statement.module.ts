import { Module } from '@nestjs/common';
import { ProblemsStatementController } from './problems-statement.controller';
import { ProblemsStatementService } from './problems-statement.service';

@Module({
  controllers: [ProblemsStatementController],
  providers: [ProblemsStatementService]
})
export class ProblemsStatementModule {}
