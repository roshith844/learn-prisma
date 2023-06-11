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
  // const output = await prisma.user.findMany({
  //   where: {

  //   }, 
  // include: {
  //   preferences: true
  // }
  // })
  //  const out = await prisma.preferences.create({
  //   data: {
  //     id: 5,
  //     emailUpdates: false,
  //   }
  //  })
  //  console.log(out)
  // const output = await prisma.user.findMany({
  //   where: {
  //     AND: [{ isAdmin: true, name: { not: 'me' } },
  //     { email: { notIn: ['spam@gmail.com', 'admin@gamil.com'], contains: '.com' } }]
  //   }
  //   , distinct: ['name', 'userId'],
  //   orderBy: {
  //     userId: "desc"
  //   }
  // })
  // const output = await prisma.user.update({
  //   where: {
  //     : 'nazim@gmail.com'
  //   },
  //   data: {
  //     email: 'nazim@mail.com'
  //   }
  // })
  // const output = await prisma.user.update({
  //   where: {
  //     userId: 3
  //   },
  //   data: {
  //     email: 'nazimAmeer@gmail.com'
  //   }
  // })

  // console.log(output)
  // const out = await prisma.preferences.update({
  //   where: {
  //     id: 5
  //   },
  //   data: {
  //   connect: {
  //     userId: 3
  //   // }
  //   }
  // })
  // console.log(out)
  console.log(await prisma.preferences.findMany({
    where: {
      id: 5
    },
    include: { user: true }
  }))
  // console.log(await prisma.user.findMany({
  //   where: {
  //     userId: 3
  //   },
  //   include: {
  //     preferences: true
  //   }
  // }))
  // console.log(await prisma.preferences.update({
  //   where: {
  //     id: 5
  //   },
  //   data: {
  //     user: {
  //       connect: {
  //         userId: 3
  //       }
  //     }
  //   }
  // }))


}
main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect
  })