import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/featured_tags/#unfeature-a-tag-unfeature
export async function DELETE(event: APIEvent) {
  const tagId = event.params.tagId

  // TODO
}
