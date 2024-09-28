interface Props {
  size: string;
}

export const SpacingBlock: React.FC<Props> = ({ size }) => (
  <div className={size} />
);
