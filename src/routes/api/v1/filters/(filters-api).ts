import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/filters/#get-v1
export async function GET(event: APIEvent) {
  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#create-v1
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const phrase = form.get('phrase')
  const context = form.getAll('context[]')
  const irreversible = form.get('irreversible')
  const wholeWord = form.get('whole_word')
  const expiresIn = form.get('expires_in')

  // TODO
}
