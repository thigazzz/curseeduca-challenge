import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { Product } from "@prisma/client";
import { ProductService } from "src/entities/product.service";

@Controller()
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('product')
    async createProduct(
        @Body() data: {title: string, description: string, image: string, price: number, categoryId: number}
    ): Promise<Product> {
        const {title, description, image, price, categoryId} = data
        return this.productService.createProduct({
            category: {
                connect: {id: categoryId},
            },
            title,
            description,
            image,
            price,
        })
    }

    @Get('products')
    async listCategories(
        @Query('skip') skipQuery?: string,
        @Query('limit') limitQuery?: string,
    ): Promise<Product[]> {
        const skip = Number(skipQuery) || 0
        const limit = Number(limitQuery) || 10

        
        return this.productService.products({skip: skip, take: limit})
    }

    @Delete('product/:id')
    async deleteProduct(
        @Param('id') id: string
    ): Promise<Product> {
        return this.productService.deleteProduct({id: Number(id)})
    }
}