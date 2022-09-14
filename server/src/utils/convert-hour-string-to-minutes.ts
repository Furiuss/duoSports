export function convertHourStringToMinute(hourString: string): number {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmont = hours * 60 + minutes;

  return minutesAmont;
}
