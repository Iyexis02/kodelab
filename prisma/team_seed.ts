import { TeamSeedType } from '@/types';

export function getTeamData() {
  const teamMembers: TeamSeedType[] = [
    {
      name: 'Alice',
      surname: 'Smith',
      role: 'Frontend Developer',
      image: 'https://example.com/images/alice.jpg',
      introduction: 'Passionate frontend engineer.',
      skills: '["React", "TypeScript", "CSS"]',
      socials: {
        email: 'alice@example.com',
        linkedin: 'https://linkedin.com/in/alicesmith',
        twitter: 'https://twitter.com/alicesmith',
      },
    },
    {
      name: 'Bob',
      surname: 'Johnson',
      role: 'Backend Developer',
      image: 'https://example.com/images/bob.jpg',
      introduction: 'Loves APIs and databases.',
      skills: '["Node.js", "PostgreSQL", "Prisma"]',
      socials: {
        email: 'bob@example.com',
        linkedin: null,
        twitter: null,
      },
    },
  ];
  return teamMembers;
}
