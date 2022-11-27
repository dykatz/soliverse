import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#create
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const username = form.get('username')
  const email = form.get('email')
  const password = form.get('password')
  const agreement = form.get('agreement')
  const locale = form.get('locale')
  const reason = form.get('reason')

  // TODO
}
