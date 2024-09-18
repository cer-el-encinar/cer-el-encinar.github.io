interface Props {
  children: React.ReactNode;
}

export const Title: React.FC<Props> = ({ children }) => (
  <div className="font-featured text-2xl my-1 mx-0 font-bold py-3 px-3">
    {children}
  </div>
);
