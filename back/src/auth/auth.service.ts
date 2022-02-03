import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@karibooh/ig-interfaces';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<User | null> {
        const user = new User(await this.userService.getByEmailAndPassword({ email: email, password: pass }));
        if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: Omit<User, 'password'>) {
        const payload = { user, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
