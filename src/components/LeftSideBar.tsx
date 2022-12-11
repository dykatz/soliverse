import { A } from '@solidjs/router'
import { Show } from 'solid-js'

export default function LeftSideBar() {
  // TODO: Actually handle authentication data
  return (
    <div class='flex flex-col min-w-max'>
      <button>Search</button>
      <hr />
      <A href='/'>Home</A>
      <A href='/local'>Local Timeline</A>
      <A href='/federated'>Federated Timeline</A>
      <A href='/directory'>Browse Profiles</A>
      <Show when={false}>
        <hr />
        <A href='/notifications'>Notifications</A>
        <A href='/conversations'>Conversations</A>
        <A href='/bookmarks'>Bookmarks</A>
        <A href='/lists'>Lists</A>
        <A href='/events'>Events</A>
      </Show>
      <hr />
      <A href='/settings'>Settings</A>
    </div>
  )
}
