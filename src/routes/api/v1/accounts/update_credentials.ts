import { APIEvent, json } from 'solid-start'

// https://docs.joinmastodon.org/methods/accounts/#update_credentials
export async function PATCH(event: APIEvent) {
  const form = await event.request.formData()

  const discoverable = form.get('discoverable')
  const bot = form.get('bot')
  const displayName = form.get('display_name')
  const note = form.get('note')
  const avatar = form.get('avatar')
  const header = form.get('header')
  const locked = form.get('locked')
  const sourcePrivacy = form.get('source[privacy]')
  const sourceSensitive = form.get('source[sensitive]')
  const sourceLanguage = form.get('source[language]')
  const fieldsAttributes = form.getAll('fields_attributes')

  // TODO
}
