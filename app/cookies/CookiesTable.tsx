import cookies from './cookies'

export default function CookiesTable(): JSX.Element {
  return (
    <table className="cookies-table">
      <tr>
        <th>Cookie</th>
        <th>Finalidad</th>
        <th>Caducidad</th>
        <th>Tipo</th>
      </tr>
      {cookies.map((cookie) => (
        <tr key={cookie.name}>
          <td>{cookie.name}</td>
          <td>{cookie.description}</td>
          <td>{cookie.persistence}</td>
          <td>{cookie.type}</td>
        </tr>
      ))}
    </table>
  )
}
