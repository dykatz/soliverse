import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#unpin
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  // TODO
}
