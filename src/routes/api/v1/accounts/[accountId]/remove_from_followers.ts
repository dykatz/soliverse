import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#remove_from_followers
export async function POST(event: APIEvent) {
  const accountId = event.params.accountId

  // TODO
}
