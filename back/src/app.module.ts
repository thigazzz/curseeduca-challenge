import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './entities/category.service';
import { ProductService } from './entities/product.service';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, ProductController],
  providers: [PrismaService, CategoryService, ProductService],
})
export class AppModule {}
