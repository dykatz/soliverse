import { APIEvent, json } from 'solid-start/api'

// https://docs.joinmastodon.org/methods/oauth/#revoke
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const clientId = form.get('client_id')
  const clientSecret = form.get('client_secret')
  const token = form.get('token')

  // TODO
}
