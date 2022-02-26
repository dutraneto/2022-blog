export default function CodePenBlend({ id }) {
  return (
    <iframe
      src={`https://codepen.io/dutraneto/pen/${id}`}
      style={{ height: '500px' }}
    />
  )
}
