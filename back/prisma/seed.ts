import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const shirtCategory = await prisma.category.create({
        data: {
            name: 'camisas'
        }
    })
    const cupCategory = await prisma.category.create({
        data: {
            name: 'copos'
        }
    })

    await prisma.product.create({
        data: {
            title: 'Camisa azul',
            description: 'Uma boa camisa',
            image: 'https://images.unsplash.com/photo-1625585445301-676203ae67fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWlzYSUyMGF6dWx8ZW58MHx8MHx8fDA%3D',
            price: 100,
            categoryId: shirtCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Camisa verde',
            description: 'Uma boa camisa',
            image: 'https://images.unsplash.com/photo-1606802523486-7fb118e84b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtaXNhJTIwdmVyZGV8ZW58MHx8MHx8fDA%3D',
            price: 80,
            categoryId: shirtCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Camisa rosa',
            description: 'Uma boa camisa',
            image: 'https://images.unsplash.com/photo-1525326006910-384ca07920d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtaXNhJTIwcm9zYXxlbnwwfHwwfHx8MA%3D%3D',
            price: 120,
            categoryId: shirtCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Camisa preta',
            description: 'Uma boa camisa',
            image: 'https://images.unsplash.com/photo-1502389614483-e475fc34407e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtaXNhJTIwcHJldGF8ZW58MHx8MHx8fDA%3D',
            price: 40,
            categoryId: shirtCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Camisa vermelha',
            description: 'Uma boa camisa',
            image: 'https://images.unsplash.com/photo-1608976989382-d913f97920c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtaXNhJTIwdmVybWVsaGF8ZW58MHx8MHx8fDA%3D',
            price: 100,
            categoryId: shirtCategory.id
        }
    })


    await prisma.product.create({
        data: {
            title: 'Copo Star-Wars',
            description: 'Um copo bom',
            image: 'https://images.unsplash.com/photo-1653606804639-285cc9eafc85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29wbyUyMHN0YXIlMjB3YXJzfGVufDB8fDB8fHww',
            price: 20,
            categoryId: cupCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Copo Planta',
            description: 'Um copo bom',
            image: 'https://images.unsplash.com/photo-1481973946307-512988dde8b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuZWNhJTIwb25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D',
            price: 10,
            categoryId: cupCategory.id
        }
    })
    await prisma.product.create({
        data: {
            title: 'Copo Create',
            description: 'Um copo bom',
            image: 'https://images.unsplash.com/photo-1520809170356-cfbee41507c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmVjYSUyMG9uZSUyMHBpZWNlfGVufDB8fDB8fHww',
            price: 50,
            categoryId: cupCategory.id
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })