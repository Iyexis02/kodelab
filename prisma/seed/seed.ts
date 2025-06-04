import { getTeamData } from '../team_seed';
import { Prisma, PrismaClient } from '@prisma/client';

import { TeamSeedType } from '@/types';

const prisma = new PrismaClient();

async function seedAllData() {
  const teamMembers = getTeamData();

  await seedTeamMembers(teamMembers);
}

async function seedTeamMembers(team: TeamSeedType[]) {
  const teamMembers: {
    id: string;
    name: string;
    surname: string;
    role: string | null;
    image: string | null;
    introduction: string | null;
    skills: string | null;
    socials: Prisma.JsonValue;
  }[] = [];

  for (const data of team) {
    const teamMember = await prisma.team.create({
      data,
    });
    teamMembers.push(teamMember);
  }

  console.log('Added team members...');
  return teamMembers;
}

seedAllData()
  .then(() => {
    console.log('\nSeeding success ✅\n');
    console.log("Don't forget to log out of the application before testing!");
  })
  .catch((e) => {
    console.log('\n\nSeeding failed ❌\n\n', e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
