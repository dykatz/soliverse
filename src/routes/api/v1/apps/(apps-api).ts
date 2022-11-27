import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/apps/#create
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const clientName = form.get('client_name')
  const redirectUris = form.get('redirect_uris')
  const scopes = form.get('scopes')
  const website = form.get('websites')

  // TODO
}
