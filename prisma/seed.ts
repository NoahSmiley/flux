import prisma from '../lib/prisma'
import bcrypt from 'bcrypt'

async function main() {
  const envAdminPass = process.env.WEB_ADMIN_PASSWORD
  if (!envAdminPass) {
    console.error('WEB_ADMIN_PASSWORD not set');
    process.exit(1);
  }
  const saltedPass = await bcrypt.hash(envAdminPass, 10);

  await Promise.all([
    prisma.user.upsert({
      where: { username: 'sysadmin' },
      update: {},
      create: {
        username: 'sysadmin',
        name: 'Sysadmin',
        password: saltedPass,
      }
    }),
  ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
