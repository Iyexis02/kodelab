type CardTitle = {
  name: string;
  url?: string | undefined;
};

type CardInfo = {
  icon: JSX.Element;
  title: CardTitle;
  description: string;
};

type Socials = {
  email: string;
  linkedin?: string | null;
  twitter?: string | null;
  github?: string | null;
};

type Employee = {
  id: string;
  name: string;
  surname: string;
  role: string;
  introduction: string;
  skills: string[];
  image: {
    url: string;
  };
  socials: Socials;
};

type LayoutLink = {
  label: string;
  url: string;
};
