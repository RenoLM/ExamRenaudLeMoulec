import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    const todos = [
        {
            content: 'Faire les courses'
        },
        {
            content: 'Finir le TP Docker'
        },
        {
            content: 'Code secret : 7h0m4535g1'
        }
    ];
  
    for (const t of todos) {
      const todo = await prisma.todo.create({
        data: t
      });
      console.log(`Created todo with id: ${todo.id}`);
    }
    console.log(`Seeding finished.`);
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
