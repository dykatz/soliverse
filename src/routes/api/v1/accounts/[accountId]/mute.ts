import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#mute
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  const form = await event.request.formData()

  const notifications = form.get('notifications')
  const duration = form.get('duration')

  // TODO
}
