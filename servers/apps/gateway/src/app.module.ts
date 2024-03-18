import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApplicationConfig } from '@nestjs/core';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [],
        }),
      },
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
