import { Title } from 'solid-start'
import { children } from 'solid-js'
import LeftSideBar from './LeftSideBar'
import { RightSideBar } from './RightSideBar'

export default function PageTemplate(props) {
  const c = children(() => props.children)

  return (
    <div class='flex flex-row justify-center space-x-6 px-6'>
      <Title>{props.title} - SoliVerse</Title>
      <LeftSideBar />
      <div class='max-w-4xl h-screen overflow-auto'>{c()}</div>
      <RightSideBar />
    </div>
  )
}
