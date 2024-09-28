type Props = {
  children: React.ReactNode;
};

export const Subtitle: React.FC<Props> = ({ children }) => (
  <small className="block text-2xl mt-4">{children}</small>
);
