import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {

  /* CREATE */
  //  await prisma.user.create({data: {name: 'kyle'}}) // creates single data

  // await prisma.user.createMany({  // creates many data
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

  /* READ */
  //  await prisma.user.findMany({
  //   where: {
  //     AND: [{ isAdmin: true, name: { not: 'me' } },
  //     { email: { notIn: ['spam@gmail.com', 'admin@gamil.com'], contains: '.com' } }]
  //   }
  //   , distinct: ['name', 'userId'],
  //   orderBy: {
  //     userId: "desc"
  //   }
  // })

    // console.log(await prisma.preferences.findMany({
  //   where: {
  //     id: 5
  //   },
  //   include: { user: true }  // includes connected feild also
  // }))

  /* UPDATE */
  //  await prisma.user.update({
  //   where: {
  //     : 'nazim@gmail.com'
  //   },
  //   data: {
  //     email: 'nazim@mail.com'
  //   }
  // })

  // await prisma.preferences.update({
  //   where: {
  //     id: 5
  //   },
  //   data: {
  //   connect: {  // connects with feild of userId from the another table 
  //     userId: 3
  //    }
  //   }
  // })


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

  /* DELETE */
  // await prisma.user.deleteMany()// deletes all data
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect
  })