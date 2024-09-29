type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const MenuButton: React.FC<Props> = ({ isOpen = false, toggle }) => (
  <div
    className="select-none inline-block lg:hidden h-[60px] w-[60px] cursor-pointer flex-col justify-center items-center relative"
    onClick={toggle}
  >
    <div
      className={`block bg-primary absolute h-[4px] w-[60px] transition-transform duration-500 ease-in-out rounded-sm mt-[30px]
before:block before:bg-primary before:absolute before:h-[4px] before:w-[60px] before:transition-all before:duration-500 before:ease-out before:rounded-sm
after:block after:bg-primary after:absolute after:h-[4px] after:w-[60px] after:transition-all after:duration-500 after:ease-out after:rounded-sm
before:content-[''] before:mt-[-16px]
after:content-[''] after:mt-[16px] ${
        isOpen &&
        'before:mt-1 before:rotate-[405deg] bg-white after:mt-1 after:rotate-[-405deg]'
      }`}
    />
  </div>
);
