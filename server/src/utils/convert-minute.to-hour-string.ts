export function convertMinuteToHour(minutesAmount: number): string {
  const hours = Math.floor(minutesAmount/60)
  const minutes = minutesAmount % 60;

  return `${hours}:${minutes}`;
}