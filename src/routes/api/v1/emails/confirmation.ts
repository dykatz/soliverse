import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/emails/#confirmation
export async function POST(event: APIEvent) {
  const form = await event.request.formData()
  const email = form.get('email')

  // TODO
}
