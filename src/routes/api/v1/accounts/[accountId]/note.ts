import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#note
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  const form = await event.request.formData()

  const comment = form.get('comment')

  // TODO
}
