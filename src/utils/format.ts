import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatDate = (date: string | Date) => {
  return dayjs(date).format('MMM DD, YYYY');
};

export const formatRelativeTime = (date: string | Date) => {
  return dayjs(date).fromNow();
};

export const formatDateTime = (date: string | Date) => {
  return dayjs(date).format('MMM DD, YYYY [at] h:mm A');
};
