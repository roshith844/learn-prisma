import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {
  //   const user = await prisma.user.create({data: {name: 'kyle'}})
  // await prisma.preferences.deleteMany()
  // await prisma.user.deleteMany()
  // const user = await prisma.user.createMany({
  //   data: [{
  //     userId: 1,
  //     name: 'roshithp',
  //     email: 'roshith844@gmail.com',
  //     isAdmin: true
  //   },
  //     {
  //       userId: 3,
  //       name: 'nazim',
  //       email: 'nazim@gmail.com',
  //       isAdmin: true
  //     },
  //     {
  //       userId: 7,
  //       name: 'akshay',
  //       email: 'mrudul@gmail.com',
  //       isAdmin: true
  //     }
  // ]
  // })

  // console.log(user)
  // const output = await prisma.user.findMany()
  const output = await prisma.user.findMany({
    where: {
      AND: [{ isAdmin: true, name: { not: 'me' } },
      { email: { notIn: ['spam@gmail.com', 'admin@gamil.com'], contains: '.com' } }]
    }
    , distinct: ['name', 'userId'],
    orderBy: {
      userId: "desc"
    }
  })
  console.log(output)
}
main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect
  })