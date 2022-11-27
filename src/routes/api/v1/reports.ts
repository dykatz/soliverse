import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/reports/#post
export async function POST(event: APIEvent) {
  const form = await event.request.formData()

  const accountId = form.get('account_id')
  const statusIds = form.getAll('status_ids[]')
  const comment = form.get('comment')
  const forward = form.get('forward')
  const category = form.get('category')
  const ruleIds = form.getAll('rule_ids[]')

  // TODO
}
