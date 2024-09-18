import { Title, Content, Image } from './components';

interface Props {
  children: React.ReactNode;
}

const $Card: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col h-full bg-white shadow-ground hover:shadow-elevated hover:scale-105 rounded-md mb-1 overflow-hidden transition-all duration-200">
    {children}
  </div>
);

export const Card = $Card as typeof $Card & {
  Title: typeof Title;
  Content: typeof Content;
  Image: typeof Image;
};

Card.Title = Title;
Card.Content = Content;
Card.Image = Image;

Card.displayName = 'Card';
