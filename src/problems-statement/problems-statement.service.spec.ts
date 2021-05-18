import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsStatementService } from './problems-statement.service';

describe('ProblemsStatementService', () => {
  let service: ProblemsStatementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProblemsStatementService],
    }).compile();

    service = module.get<ProblemsStatementService>(ProblemsStatementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("getOutput method", () => {
    it("should navigate to ps 1", () => {
      const input = [1, 4, 2, 3, 3, 9, 1, 7, 8, 5];
      const result = [2, 4, 8, 1, 1, 3, 3, 5, 7, 9];
      expect(service.getOutput(1,input)).toEqual(result);
    });
    it("should navigate to ps 2", () => {
      const input = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0 , 0, 1, 1, 1, 0, 1, 1, 1, 0, 0];
      const result = [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0];
      expect(service.getOutput(2,input)).toEqual(result);
    });
    it("should navigate to ps 3", () => {
      const input = [1, 0, 0, 11, 9, 0, 0, 0, 28, 0, 0, 0, 7, 1, 2, 78, 0, 0];
      const result = [1, 1, 2, 7, 9, 11, 28, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(service.getOutput(3,input)).toEqual(result);
    });
    it("should navigate to ps 4", () => {
      const input = [73];
      const result = {
        Bnum: 1001001,
        pallindrome: 'yes'
      }
      expect(service.getOutput(4,input)).toEqual(result);
    });
    it("invalid ps type provided", () => {
      const input = [73];
      const result = {
        Bnum: 1001001,
        pallindrome: 'yes'
      }
      expect(()=>service.getOutput(5,input)).toThrow()
    });
    it("ps not type provided", () => {
      const input = [73];
      const result = {
        Bnum: 1001001,
        pallindrome: 'yes'
      }
      expect(()=>service.getOutput('',input)).toThrow()
    });
  });

  describe('test sort even odd method', () => {
    it('successful response', () => {
      const input = [1, 4, 2, 3, 3, 9, 1, 7, 8, 5];
      const result = [2, 4, 8, 1, 1, 3, 3, 5, 7, 9];
      expect(service.validateInput(input)).toEqual(true);
      expect(service.sortEvenOdd(input)).toEqual(result);
    });
    it('invalid input', () => {
      const input = [1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5];
      expect(service.validateInput(input)).toEqual(false);
      expect(()=>service.sortEvenOdd([1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5])).toThrow();
    });
  });

  describe('test arrangeZerosAndOnes method', () => {
    it('successful response', () => {
      const input = [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0 , 0, 1, 1, 1, 0, 1, 1, 1, 0, 0];
      const result = [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0];
      expect(service.validateZerosAndOnes(input)).toEqual(true);
      expect(service.arrangeZerosAndOnes(input)).toEqual(result);
    });
    it('invalid input', () => {
      const input = [1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5];
      expect(service.validateInput(input)).toEqual(false);
      expect(()=>service.arrangeZerosAndOnes([1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5])).toThrow();
    });
  });

  describe('test performInterestingSort method', () => {
    it('successful response', () => {
      const input = [1, 0, 0, 11, 9, 0, 0, 0, 28, 0, 0, 0, 7, 1, 2, 78, 0, 0];
      const result = [1, 1, 2, 7, 9, 11, 28, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(service.validateInput(input)).toEqual(true);
      expect(service.performInterestingSort(input)).toEqual(result);
    });
    it('invalid input', () => {
      const input = [1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5];
      expect(service.validateInput(input)).toEqual(false);
      expect(()=>service.performInterestingSort([1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5])).toThrow();
    });
  });

  describe('test findBinaryAndPallindrome method', () => {
    it('successful response', () => {
      const input = [73];
      const result = {
        Bnum: 1001001,
        pallindrome: 'yes'
      }
      expect(service.validateInput(input)).toEqual(true);
      expect(service.findBinaryAndPallindrome(input)).toEqual(result);
    });
    it('when the binary is not pallindrome', () => {
      const input = [13];
      const result = {
        Bnum: 1101,
        pallindrome: 'No'
      }
      expect(service.validateInput(input)).toEqual(true);
      expect(service.findBinaryAndPallindrome(input)).toEqual(result);
    });
     it('invalid input when input is incorrect', () => {
       const input = [1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5];
    expect(service.validateInput(input)).toEqual(false);
       expect(()=>service.findBinaryAndPallindrome([1, 4, 2, 3, 3, 9.1, 1.3, 7, 8, 5])).toThrow();
     });
  });
  
  
});
