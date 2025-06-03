import { createUrl } from '@/utils';

const Navigation = () => {
  const navClass = 'text-dark hover:text-dark transition-colors';

  const navItems: string[] = ['Home', 'Technologies', 'Team', 'Products', 'About us', 'Contact'];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((navItem: string, index: number) => {
        return (
          <a key={navItem + '-' + index} href={createUrl(navItem)} className={navClass}>
            {navItem}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
