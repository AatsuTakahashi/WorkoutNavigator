export const formatDate = (timestamp: {
  seconds: number;
  nanoseconds: number;
}) => {
  const date = new Date(timestamp.seconds * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export const formatFullDate = (input: Date | Timestamp) => {
  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else {
    date = new Date(input.seconds * 1000);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}年${month}月${day}日${hours}時${minutes}分`;
};
