import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { schema, UserSchema } from '../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserSchema.name, schema: schema, collection: 'Users' }])],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
