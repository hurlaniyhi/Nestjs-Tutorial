import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';
import { ProductModule } from './product/product.module';
import { ProductSchema } from './product/entities/product.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/sampleDB'),
    MongooseModule.forFeature([
      {name: 'user', schema: UserSchema},
      {name: 'product', schema: ProductSchema}
    ]),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
