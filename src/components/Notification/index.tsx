import { memo } from 'react';
import { ToastContentProps } from 'react-toastify';

type NotificationProps = Partial<ToastContentProps> & {
  emoji: string;
};

const NotificationComponent = ({ emoji }: NotificationProps) => {
  return <div>{emoji} Copied!</div>;
};

export const Notification = memo(NotificationComponent);
