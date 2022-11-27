import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#following
export async function GET(event: APIEvent) {
  const accountId = event.params.accountId

  // TODO
}
