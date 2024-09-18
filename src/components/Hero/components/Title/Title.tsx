type Props = {
  children: React.ReactNode;
  'data-tina-field'?: string;
};

export const Title: React.FC<Props> = ({
  children,
  'data-tina-field': dataTinaField,
}) => <h2 data-tina-field={dataTinaField}>{children}</h2>;
