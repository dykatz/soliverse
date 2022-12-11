import { A } from '@solidjs/router'
import { Show, children } from 'solid-js'

function HeaderUnauthenticated() {
  return (
    <>
      <A href='/log-in'>Log In</A>
      <A href='/sign-up'>Sign Up</A>
    </>
  )
}

function HeaderAuthenticated() {
  return (
    <>
      <div>Profile</div>
      <A href='/log-out'>Log Out</A>
    </>
  )
}

function Header() {
  // TODO: Actually handle authentication data
  return (
    <Show when={false} fallback={<HeaderUnauthenticated />}>
      <HeaderAuthenticated />
    </Show>
  )
}

function Footer() {
  return (
    <>
      <A href='/about'>About</A>
      <A href='/terms'>Terms</A>
      <A href='/privacy'>Privacy</A>
      <div>
        &copy; 2022 <A href='https://github.com/dykatz/soliverse'>SoliVerse</A>
      </div>
    </>
  )
}

export function RightSideBar() {
  return (
    <div class='flex flex-col min-w-max'>
      <Header />
      <hr />
      <Footer />
    </div>
  )
}

export function RightSideBarWithChild(props) {
  const c = children(() => props.children)

  return (
    <div class='flex flex-col min-w-max'>
      <Header />
      <hr />
      {c()}
      <hr />
      <Footer />
    </div>
  )
}
