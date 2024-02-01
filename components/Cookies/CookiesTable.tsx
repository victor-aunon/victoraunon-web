import cookies from 'app/cookies/cookies'

interface CookiesTableProps {
  cookieType?: string
}

export default function CookiesTable(props: CookiesTableProps): JSX.Element {
  return (
    <table className="cookies-table">
      <thead>
        <tr>
          <th>Cookie</th>
          <th>Finalidad</th>
          <th>Caducidad</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {cookies
          .filter((cookie) =>
            props.cookieType !== undefined
              ? cookie.typeSlug === props.cookieType
              : cookie.typeSlug
          )
          .map((cookie) => (
            <tr key={cookie.name}>
              <td>{cookie.name}</td>
              <td>{cookie.description}</td>
              <td>{cookie.persistence}</td>
              <td>{cookie.type}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
