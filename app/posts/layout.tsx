import { LayoutProps } from 'interfaces/Layout'

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <section>{children}</section>
}
