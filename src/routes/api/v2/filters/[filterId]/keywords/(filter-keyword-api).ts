import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/filters/#keywords-get
export async function GET(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#keywords-create
export async function POST(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}
