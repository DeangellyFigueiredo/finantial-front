export function formatDate(value: string) {
  const newDate = value;
  const [data] = newDate.split("T");
  const [year, moth, day] = data.split("-");
  const dateWithoutTime = `${day}/${moth}/${year}`;
  return dateWithoutTime;
}
