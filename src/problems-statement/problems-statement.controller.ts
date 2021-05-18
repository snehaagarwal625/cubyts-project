import { Controller, Get, Param, ParseArrayPipe, ParseIntPipe, Query } from '@nestjs/common';
import { GetOutputDto } from './dto/getOutput.dto';
import { ProblemsStatementService } from './problems-statement.service';

@Controller('problems-statement')
export class ProblemsStatementController {
    constructor(private problemStatementService: ProblemsStatementService){}
     
    @Get(':id/:input')
    getOutput(
        @Param('id', ParseIntPipe) id: number,
        @Param('input', ParseArrayPipe) getOutputDto: GetOutputDto){
            return this.problemStatementService.getOutput(id, getOutputDto);
    }
}
