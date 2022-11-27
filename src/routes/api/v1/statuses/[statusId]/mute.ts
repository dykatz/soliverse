import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/statuses/#mute
export async function POST(event: APIEvent) {
  const statusId = event.params.statusId

  // TODO
}
