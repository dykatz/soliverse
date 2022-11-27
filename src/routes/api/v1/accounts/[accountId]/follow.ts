import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#follow
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  const form = await event.request.formData()

  const reblogs = form.get('reblogs')
  const notify = form.get('notify')
  const languages = form.getAll('languages')

  // TODO
}
