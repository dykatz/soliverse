import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/filters/#get-one
export async function GET(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#update
export async function PUT(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#delete
export async function DELETE(event: APIEvent) {
  const filterId = event.params.filterId

  // TODO
}
