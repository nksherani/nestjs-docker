import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    username: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;
    
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    passwordHash: string;

    @Prop({ required: true })
    salt: string;

    @Prop()
    fullName: string;

    @Prop({ required: true })
    createdDate: Date;

    @Prop()
    createdBy: number;

    @Prop()
    updatedDate: Date;

    @Prop()
    updatedBy: number;
}

export const UserSchema = SchemaFactory.createForClass(User);