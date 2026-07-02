import cookies from 'app/cookies/cookies'

import type { JSX } from 'react'

interface CookiesTableProps {
  cookieType?: string
}

export default function CookiesTable(props: CookiesTableProps): JSX.Element {
  return (
    <table className="w-full my-4">
      <thead className="text-indigo-400 text-xl font-semibold">
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
            <tr className="even:bg-gray-800" key={cookie.name}>
              <td className="p-[0.5rem]">{cookie.name}</td>
              <td className="p-[0.5rem]">{cookie.description}</td>
              <td className="p-[0.5rem]">{cookie.persistence}</td>
              <td className="p-[0.5rem]">{cookie.type}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
