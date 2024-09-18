interface Props {
  children: React.ReactNode;
}

export const Content: React.FC<Props> = ({ children }) => (
  <p className="text-xl pb-6 px-2 mb-0">{children}</p>
);
