interface Props {
  children: React.ReactNode;
  onClick: (event?: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => (
  <button
    className="rounded-lg py-[0.5rem] px-[1.5rem] font-regular text-2xl font-bold text-white bg-primary cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);
