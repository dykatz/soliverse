import { APIEvent, json } from 'solid-start/api'

// https://docs.joinmastodon.org/methods/oauth/#token
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const grantType = form.get('grant_type')
  const code = form.get('code')
  const clientId = form.get('client_id')
  const redirectUri = form.get('redirect_uri')
  const scope = form.get('scope')

  // TODO
}
