import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';


@Injectable()
export class Hasher {

    private saltOrRounds;

    constructor() {
        this.saltOrRounds = 10;
    }

    async hash(toBeHashed: string): Promise<string>
    {
        return await bcrypt.hash(toBeHashed, this.saltOrRounds);
    }



}