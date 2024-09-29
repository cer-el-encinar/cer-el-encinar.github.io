import {
  FaCircleInfo,
  FaTriangleExclamation,
  FaCircleXmark,
} from 'react-icons/fa6';

import { TMessageBoxType } from '@declarations';

interface Props {
  type?: TMessageBoxType;
  children: React.ReactNode;
}

const typeMap = {
  info: { icon: FaCircleInfo, color: 'rgb(3,105,161)' },
  warning: { icon: FaTriangleExclamation, color: 'rgb(180,83,9)' },
  danger: { icon: FaCircleXmark, color: 'rgb(190 18 60)' },
};

export const MessageBox: React.FC<Props> = ({ type = 'info', children }) => {
  const { icon: Icon, color } = typeMap[type === null ? 'info' : type];
  return (
    <div
      className={`my-16 p-8 grid grid-cols-1 text-center justify-items-center gap-4
${type === 'info' ? 'border-sky-700 bg-sky-200 text-sky-700' : ''}
${type === 'warning' ? 'border-amber-700 bg-amber-200 text-amber-700' : ''}
${type === 'danger' ? 'border-rose-700 bg-rose-200 text-rose-700' : ''}
rounded-xl border border-solid w-full text-2xl md:text-3xl lg:text-4xl`}
    >
      <Icon size={64} color={color} />
      <div style={{ flex: '1' }}>{children}</div>
    </div>
  );
};
