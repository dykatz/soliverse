import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/filters/#keywords-get-one
export async function GET(event: APIEvent) {
  const { filterId, keywordId } = event.params

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#keywords-update
export async function PUT(event: APIEvent) {
  const { filterId, keywordId } = event.params

  // TODO
}

// https://docs.joinmastodon.org/methods/filters/#keywords-get
export async function DELETE(event: APIEvent) {
  const { filterId, keywordId } = event.params

  // TODO
}
