import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersController } from './orders/orders.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
