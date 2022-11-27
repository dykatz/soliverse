import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/statuses/#get
export async function GET(event: APIEvent) {
  const statusId = event.params.statusId

  // TODO
}

// https://docs.joinmastodon.org/methods/statuses/#edit
export async function PUT(event: APIEvent) {
  const statusId = event.params.statusId

  const form = await event.request.formData()

  const status = form.get('status')
  const spoilerText = form.get('spoiler_text')
  const sensitive = form.get('sensitive')
  const mediaIds = form.getAll('media_ids[]')
  const pollOptions = form.getAll('poll[options][]')
  const pollExpiresIn = form.get('poll[expires_in]')
  const pollMultiple = form.get('poll[multiple]')
  const pollHideTotals = form.get('poll[hide_totals]')

  // TODO
}

// https://docs.joinmastodon.org/methods/statuses/#delete
export async function DELETE(event: APIEvent) {
  const statusId = event.params.statusId

  // TODO
}
