import Image from 'next/image'

export function CodePenBlend({ id }) {
  return (
    <p>
      <a
        href={`https://codepen.io/dutraneto/pen/${id}`}
        rel="noopener noreferrer"
        target="_blank"
      >{`https://codepen.io/dutraneto/pen/${id}`}</a>
    </p>
  )
}

export function Picture({ src, alt }) {
  return (
    <Image src={src} layout="responsive" width={600} height={320} alt={alt} />
  )
}
