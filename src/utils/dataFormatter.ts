export const formatDate = (timestamp: {
  seconds: number;
  nanoseconds: number;
}) => {
  const date = new Date(timestamp.seconds * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};
