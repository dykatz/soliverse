import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/tags/#get
export async function GET(event: APIEvent) {
  const tagId = event.params.tagId

  // TODO
}
