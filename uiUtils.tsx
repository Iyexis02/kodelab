import { Card, CardContent } from './app/components/ui/Card';
import { CardContentVariant } from './enums';
import Link from 'next/link';

type CardProps = {
  cards: CardInfo[];
};

const cardClass = 'group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 px-4 py-4';
const cardContentClass = 'text-center';
const headerClass = 'text-2xl font-bold text-dark mb-4';
const descriptionClass = 'text-dark leading-relaxed';

const CardWithUrl = ({ cards }: CardProps) => {
  return cards.map((card: CardInfo) => (
    <Link href={card.title.url as string}>
      <Card key={card.title.name} className={cardClass}>
        <CardContent className={cardContentClass}>{card.icon}</CardContent>
        <h3 className={headerClass}>{card.title.name}</h3>
        <p className={descriptionClass}>{card.description}</p>
      </Card>
    </Link>
  ));
};

const CardWithoutUrl = ({ cards }: CardProps) => {
  return cards.map((card: CardInfo) => (
    <Card key={card.title.name} className={cardClass}>
      <CardContent className={cardContentClass}>{card.icon}</CardContent>
      <h3 className={headerClass}>{card.title.name}</h3>
      <p className={descriptionClass}>{card.description}</p>
    </Card>
  ));
};
const generateCardContent = (cards: CardInfo[], variant?: CardContentVariant) => {
  return variant === CardContentVariant.HowWeHelp ? <CardWithUrl cards={cards} /> : <CardWithoutUrl cards={cards} />;
};

export { generateCardContent };
