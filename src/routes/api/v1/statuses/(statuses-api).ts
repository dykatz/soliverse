import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/statuses/#create
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const status = form.get('status')
  const mediaIds = form.getAll('media_ids[]')
  const pollOptions = form.getAll('poll[options][]')
  const pollExpiresIn = form.get('poll[expires_in]')
  const pollMultiple = form.get('poll[multiple]')
  const pollHideTotals = form.get('poll[hide_totals]')
  const inReplyToId = form.get('in_reply_to_id')
  const sensitive = form.get('sensitive')
  const spoilerText = form.get('spoiler_text')
  const visibility = form.get('visibility')
  const language = form.get('language')
  const scheduledAt = form.get('scheduled_at')

  // TODO
}
