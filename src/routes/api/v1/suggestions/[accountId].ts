import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/suggestions/#remove
export async function DELETE(event: APIEvent) {
  const accountId = event.params.accountId

  // TODO
}
