import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/statuses/#unbookmark
export async function POST(event: APIEvent) {
  const statusId = event.params.statusId

  // TODO
}