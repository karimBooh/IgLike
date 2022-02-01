import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            usernameField: 'email',
            passwordField: 'password',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'AZFDGDEZAZEFDEZ2134TR5423432FREZFFDVFDEE34R43432'
        });
    }

    async validate(payload: any) {
        console.log(payload);
        return { userId: payload.sub, email: payload.email };
    }
}
