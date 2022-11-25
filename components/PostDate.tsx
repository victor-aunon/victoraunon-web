export default function PostDate({ date }: { date: string }): JSX.Element {
  // TODO locale
  const dateTranslated = Intl.DateTimeFormat('es', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Madrid',
  }).format(new Date(date))

  return <p>{dateTranslated}</p>
}
