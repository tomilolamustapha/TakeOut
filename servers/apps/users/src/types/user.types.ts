import { ObjectType,Field} from "@nestjs/graphql";
import  {User } from '../entities/user.entity';

@ObjectType()
export class ErrorType{

    @Field()
    message : string;

    @Field()
    code?:string;
}

@ObjectType()
export class RegisterResponse{

    @Field(() => User, {nullable :true})
    user? :User | any ;

    @Field(() => ErrorType, {nullable :true})
    error?: ErrorType ;

}

@ObjectType()
export class Response{

    @Field(() => User, {nullable :true})
    user? :User | any ;

    @Field(() => ErrorType, {nullable :true})
    error?: ErrorType ;

}

