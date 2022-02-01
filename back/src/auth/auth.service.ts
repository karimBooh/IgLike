import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../../../interfaces';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<User | null> {
        const user = await this.userService.getByEmailAndPassword({ email: email, password: pass });
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
