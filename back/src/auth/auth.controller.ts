import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    @Post('login')
    async login(@Req() req: Request) {
        return 'hello';
    }
}
