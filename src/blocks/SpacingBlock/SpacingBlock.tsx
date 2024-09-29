interface Props {
  size: 'small' | 'medium' | 'large';
}

export const SpacingBlock: React.FC<Props> = ({ size }) => (
  <div
    className={`
${size === 'small' ? 'h-6' : ''}
${size === 'medium' ? 'h-12' : ''}
${size === 'large' ? 'h-24' : ''}
`}
  />
);
