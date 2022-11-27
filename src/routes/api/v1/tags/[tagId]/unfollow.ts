import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/tags/#unfollow
export async function POST(event: APIEvent) {
  const tagId = event.params.tagId

  // TODO
}
