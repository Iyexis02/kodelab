import { Prisma } from '@prisma/client';

type CardInfo = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type Socials = {
  email: string;
  linkedin?: string | null;
  twitter?: string | null;
};

type Team = {
  id: string;
  name: string;
  surname: string;
  role?: string | null;
  image?: string | null;
  introduction?: string | null;
  skills?: string | null;
  socials: Socials;
};

type TeamSeedType = Omit<Prisma.TeamCreateInput, 'id'>;
