import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersController } from './orders/orders.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, ProductsModule, AuthModule, MongooseModule.forRoot(process.env.DB_HOST)],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule { }
