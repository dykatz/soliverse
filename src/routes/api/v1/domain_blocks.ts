import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/domain_blocks/#get
export async function GET(event: APIEvent) {
  // TODO
}

// https://docs.joinmastodon.org/methods/domain_blocks/#block
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const domain = form.get('domain')

  // TODO
}

// https://docs.joinmastodon.org/methods/domain_blocks/#unblock
export async function DELETE(event: APIEvent) {
  const form = await event.request.formData()

  const domain = form.get('domain')

  // TODO
}
