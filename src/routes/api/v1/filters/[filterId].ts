import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/filters/#get-one-v1
export async function GET(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#update-v1
export async function PUT(event: APIEvent) {
  const filterId = event.params.filterId

  const form = await event.request.formData()

  const phrase = form.get('phrase')
  const context = form.getAll('context[]')
  const irreversible = form.get('irreversible')
  const wholeWord = form.get('whole_word')
  const expiresIn = form.get('expires_in')

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#delete-v1
export async function DELETE(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}
