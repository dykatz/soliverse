import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/statuses/#source
export async function GET(event: APIEvent) {
  const statusId = event.params.statusId

  // TODO
}
