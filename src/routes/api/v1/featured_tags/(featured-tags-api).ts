import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/featured_tags/#get
export async function GET(event: APIEvent) {
  // TODO
}

// https://docs.joinmastodon.org/methods/featured_tags/#feature
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const name = form.get('name')

  // TODO
}
