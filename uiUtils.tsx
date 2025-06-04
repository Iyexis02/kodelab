import { Card, CardContent } from './app/components/ui/Card';
import { CardInfo } from './types';

const generateCardContent = (cards: CardInfo[]) => {
  const cardClass =
    'group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 px-4 py-4';
  const cardContentClass = 'text-center';
  const headerClass = 'text-2xl font-bold text-dark mb-4';
  const descriptionClass = 'text-dark leading-relaxed';

  return cards.map((card: CardInfo) => (
    <Card key={card.title} className={cardClass}>
      <CardContent className={cardContentClass}>{card.icon}</CardContent>
      <h3 className={headerClass}>{card.title}</h3>
      <p className={descriptionClass}>{card.description}</p>
    </Card>
  ));
};

export { generateCardContent };
