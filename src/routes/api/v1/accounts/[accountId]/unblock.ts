import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#unblock
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  // TODO
}