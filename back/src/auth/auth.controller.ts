import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Public } from '../shared/decorator/public';
import { User } from '../../../interfaces';
import { UserService } from '../user/user.service';
import { ObjectId } from 'bson';

@Controller('auth')
export class AuthController {
    constructor(private _authService: AuthService, private _userService: UserService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: Request): Promise<{ access_token: string }> {
        return this._authService.login(req.user as User);
    }

    @Public()
    @Post('signup')
    async signup(@Req() req: Request, @Body() user: User): Promise<User> {
        console.log(user);
        return this._userService.create(user, new ObjectId('hello'));
    }
}
