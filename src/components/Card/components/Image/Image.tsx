interface Props {
  children: React.ReactNode;
  padding?: string;
  cover?: boolean;
}

export const Image: React.FC<Props> = ({
  children,
  padding,
  cover = false,
}) => (
  <div
    className={`relative min-h-[150px] ${!cover && 'h-38 flex items-center justify-center '}`}
    style={{ padding }}
  >
    {children}
  </div>
);
