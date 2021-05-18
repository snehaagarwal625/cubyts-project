import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';

interface Output{
    Bnum: number;
    pallindrome: string;
}
@Injectable()
export class ProblemsStatementService {
    getOutput(psType, getOutputDto) {
        if (psType) {
            switch (psType) {
                case 1: return this.sortEvenOdd(getOutputDto);
                case 2: return this.arrangeZerosAndOnes(getOutputDto);
                case 3: return this.performInterestingSort(getOutputDto);
                case 4: return this.findBinaryAndPallindrome(getOutputDto);
                default: throw new BadRequestException('Invalid problem statement type');
            }
        } else {
            throw new BadRequestException('The problem statement type is missing');
        }
    }


    sortEvenOdd(input: Array<number>): Array<number> {
        if (this.validateInput(input)) {
            const even = [];
            const odd = [];
            for (let i = 0; i < input.length; i++) {
                if (input[i] % 2 == 0) {
                    even.push(input[i]);
                } else {
                    odd.push(input[i])
                }
                even.sort((a, b) => a - b)
                odd.sort((a, b) => a - b)
            }
            return [...even, ...odd]
        } else {
            throw new BadRequestException('invalid input provided');
        }
    }
    arrangeZerosAndOnes(input: Array<number>): Array<number> {
        if (this.validateZerosAndOnes(input)) {
            let arr = [];
            let count = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i] == 0) {
                    count++;
                    if (count == 2) {
                        arr.push(0);
                        count = 0;
                    }
                } else if (input[i] == 1) {
                    arr.push(1);
                    count = 0;
                }
            }
            return arr;

        } else {
            throw new BadRequestException('invalid input provided');
        }
    }

    performInterestingSort(input: Array<number>): Array<number> {
        if (this.validateInput(input)) {
            const zero = [];
            const nonZero = [];
            for (let i = 0; i < input.length; i++) {
                if (input[i] == 0) {
                    zero.push(input[i]);
                } else {
                    nonZero.push(input[i])
                }
                nonZero.sort((a, b) => a - b)
            }
            return [...nonZero, ...zero];
        } else {
            throw new BadRequestException('invalid input provided');
        }
    }


    findBinaryAndPallindrome(input: Array<number>): Object {
        if (this.validateInput(input) && input.length === 1) {
            let BNum = 0;
            let cnt = 0;
            let result: Output={
                Bnum: BNum,
                pallindrome: 'No'
            };
            while (input[0] != 0) {
                let rem = input[0] % 2;
                let c = Math.pow(10, cnt);
                BNum += rem * c;
                input[0] = Math.floor(input[0] / 2);
                cnt++;
            }
            if (this.checkPallindrome(BNum.toString())) {
                result.Bnum=BNum;
                result.pallindrome = 'yes';
                return result;
            } else {
                result.Bnum=BNum;
                return result;
            }
        }
        else {
            throw new BadRequestException('invalid input provided');
        }
    }

    checkPallindrome(str: string): boolean {
        if([...str].reverse().join('') === str)
            return true;
        else return false;
    }

    validateInput(input) {
        for (let i = 0; i < input.length; i++) {
            if (Number.isInteger(Number(input[i]))) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    validateZerosAndOnes(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] == 0 || input[i] == 1) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
