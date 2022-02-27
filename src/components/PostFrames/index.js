import Image from 'next/image'

export function CodePenBlend({ id }) {
  return (
    <iframe
      src={`https://codepen.io/dutraneto/pen/${id}`}
      style={{ height: '440px' }}
    />
  )
}

export function Picture({ src, alt }) {
  return (
    <Image src={src} layout="responsive" width={600} height={320} alt={alt} />
  )
}
