import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { Category } from "@prisma/client";
import { CategoryService } from "src/entities/category.service";

@Controller()
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post('category')
    async createCategory(
        @Body() data: {name: string}
    ): Promise<Category> {
        return this.categoryService.createCategory({
            name: data.name
        })
    }

    @Get('categories')
    async listCategories(): Promise<Category[]> {
        return this.categoryService.categories({})
    }

    @Delete('category/:id')
    async deleteCategory(
        @Param('id') id: string
    ): Promise<Category> {
        return this.categoryService.deleteCategory({id: Number(id)})
    }
}