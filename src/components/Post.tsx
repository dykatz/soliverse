import { A } from '@solidjs/router'
import { Component, For, Show } from 'solid-js'

type PostAttachmentProps = {
  altText: string
  url: string
}

type PostProps = {
  postId: string
  handle: string
  displayName: string
  datePosted: Date
  content: string
  replyCount: number
  repostCount: number
  likeCount: number
  attachments?: PostAttachmentProps[]
  quotePost?: PostProps
}

const PostAttachment: Component<PostAttachmentProps> = props => {
  return <div></div>
}

const Post: Component<PostProps> = props => {
  return (
    <div class='flex w-full space-x-2'>
      <div>PFP</div>

      <div class='flex flex-col grow'>
        <div class='flex justify-between'>
          <A href={`/user/${props.handle}`}>
            <b>{props.displayName}</b> @{props.handle}
          </A>

          <A href={`/post/${props.postId}`}>{props.datePosted.toDateString()}</A>
        </div>

        <p>{props.content}</p>

        <Show when={props.quotePost}>
          <div class='flex w-full space-x-2'>
            <div class='h-full w-0 border-2'></div>

            <div class='flex flex-col grow'>
              <div class='flex justify-between'>
                <A href={`/user/${props.quotePost.handle}`}>
                  <b>{props.quotePost.displayName}</b> @{props.quotePost.handle}
                </A>

                <A href={`/post/${props.quotePost.postId}`}>{props.quotePost.datePosted.toDateString()}</A>
              </div>

              <p>{props.quotePost.content}</p>

              <Show when={props.quotePost.attachments}>
                <For each={props.quotePost.attachments}>{attachment => <PostAttachment altText={attachment.altText} url={attachment.url} />}</For>
              </Show>
            </div>
          </div>
        </Show>

        <Show when={props.attachments}>
          <For each={props.attachments}>{attachment => <PostAttachment altText={attachment.altText} url={attachment.url} />}</For>
        </Show>

        <div class='flex justify-between'>
          <div>{props.replyCount} Replies</div>
          <div>{props.repostCount} Reposts</div>
          <div>{props.likeCount} Likes</div>
          <div>More</div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Post
