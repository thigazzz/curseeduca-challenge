import { Controller, Get, Post, Put, Delete, Body, Param, Query } from "@nestjs/common";
import { Product } from "@prisma/client";
import { CategoryService } from "src/entities/category.service";
import { ProductService } from "src/entities/product.service";

@Controller()
export class ProductController {
    constructor(private productService: ProductService, private categoryService: CategoryService) { }

    @Post('product')
    async createProduct(
        @Body() data: { title: string, description: string, image: string, price: number, categoryId: number }
    ): Promise<Product> {
        const { title, description, image, price, categoryId } = data
        return this.productService.createProduct({
            title,
            description,
            image,
            price,
            category: {
                connect: { id: categoryId }
            }
        })
    }

    @Get('products')
    async listProducts(
        @Query('skip') skipQuery?: string,
        @Query('limit') limitQuery?: string,
    ) {
        const skip = Number(skipQuery) || 0
        const limit = Number(limitQuery) || 10

        const products = await this.productService.products({ skip: skip, take: limit })
        const count = await this.productService.count()

        return { products, count }
    }

    @Get('products/category/:category')
    async listProductsByCategory(
        @Param('category') categoryParam: string,
        @Query('skip') skipQuery?: string,
        @Query('limit') limitQuery?: string,
    ): Promise<Product[]> {
        const skip = Number(skipQuery) || 0
        const limit = Number(limitQuery) || 10

        const category = await this.categoryService.categories({ where: { name: categoryParam } })

        return this.productService.products({ skip: skip, take: limit, where: { categoryId: category[0].id } })
    }

    @Delete('product/:id')
    async deleteProduct(
        @Param('id') id: string
    ): Promise<Product> {
        return this.productService.deleteProduct({ id: Number(id) })
    }
}