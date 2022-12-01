interface Cookie {
  name: string
  description: string
  persistence: string
  type: string
}

const cookies: Cookie[] = [
  {
    name: 'cookie',
    description: 'A simple cookie',
    persistence: '30 days',
    type: 'Functional',
  },
]

export default cookies
