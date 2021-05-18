import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsStatementController } from './problems-statement.controller';
import { ProblemsStatementService } from './problems-statement.service';

describe('ProblemsStatementController', () => {
  let controller: ProblemsStatementController;
  let service: ProblemsStatementService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemsStatementController],
      providers: [ProblemsStatementService],
    }).compile();
    service = await module.get<ProblemsStatementService>(ProblemsStatementService);
    controller = module.get<ProblemsStatementController>(ProblemsStatementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get output functionality',()=>{
    it('It should return array of output', ()=>{
      const result = [ 2, 4, 8, 9, 1, 1, 3, 3, 5, 7];
      jest.spyOn(service, 'getOutput').mockImplementation(() => result);
      expect(controller.getOutput(1, {input:[ '1', '4', '2', '3', '3', '9', '1','7', '8', '5' ]})).toBe(result);
    })
  })
});
