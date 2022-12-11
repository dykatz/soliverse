import { HttpStatusCode } from 'solid-start/server'
import PageTemplate from '~/components/PageTemplate'

export default function NotFound() {
  return (
    <PageTemplate title='Not Found'>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
    </PageTemplate>
  )
}
