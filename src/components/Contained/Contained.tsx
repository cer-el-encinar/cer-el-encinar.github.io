type Props = {
  children: React.ReactNode;
  spaced?: boolean;
  'data-tina-field'?: string;
};

export const Contained: React.FC<Props> = ({
  children,
  spaced = false,
  'data-tina-field': dataTinaField,
}) => (
  <div
    data-tina-field={dataTinaField}
    className={`px-8 ${spaced && 'pt-[6rem]'} max-w-screen-lg my-0 mx-auto`}
  >
    {children}
  </div>
);
