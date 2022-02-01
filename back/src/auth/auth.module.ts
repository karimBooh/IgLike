import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { schema, UserSchema } from '../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserSchema.name, schema: schema, collection: 'Users' }]),
        JwtModule.register({
            secret: 'AZFDGDEZAZEFDEZ2134TR5423432FREZFFDVFDEE34R43432',
            signOptions: { expiresIn: '60s' }
        })
    ],
    providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
