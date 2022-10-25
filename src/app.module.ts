import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { LogisticsModule } from './logistics/logistics.module';

@Module({
  imports: [AuthModule, ProductsModule, OrdersModule, UsersModule, LogisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
