import { Injectable } from "@nestjs/common";
import { Product, Prisma } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }

    async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
        return this.prisma.product.create({ data })
    }

    async product(uniqueInput: Prisma.ProductWhereUniqueInput): Promise<Product | null> {
        return this.prisma.product.findUnique({
            where: uniqueInput
        })
    }

    async products(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params
        const page = Number(skip) * Number(take)
        return this.prisma.product.findMany({
            skip: page,
            take,
            cursor,
            where,
            orderBy,
        })
    }

    async updateProduct(params: {
        where: Prisma.ProductWhereUniqueInput;
        data: Prisma.ProductUpdateInput;
    }): Promise<Product> {
        const { data, where } = params;
        return this.prisma.product.update({
            data,
            where,
        });
    }

    async deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
        return this.prisma.product.delete({
            where,
        });
    }

    async count(): Promise<number> {
        return this.prisma.product.count()
    }
}