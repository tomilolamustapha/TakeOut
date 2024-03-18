import { InputType,Field } from "@nestjs/graphql";
import {IsEmail ,IsNotEmpty,IsString, MinLength} from '@nestjs/class-validator'

@InputType()
export class LoginDto{

    @Field()
    @IsNotEmpty({message :'Email is Required'})
    @IsEmail({message : 'Email is invalid'})
    email : string;

    @Field()
    @IsNotEmpty({message :'Email is Required'})
    @MinLength(8,{message :'Password must be atleast 8 characters'})
    password : string;
}