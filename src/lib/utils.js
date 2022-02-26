export function translatedReadText(language) {
  return language === 'English' ? 'minutes to read' : 'minutos de leitura'
}
export function translatedDate(language, date) {
  const options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long'
  }
  return language === 'English'
    ? new Date(date).toLocaleDateString('en-us', options)
    : new Date(date).toLocaleDateString('pt-br', options)
}

// a function to calculate reading time
export function timeToRead(text) {
  const words = text.split(' ')
  const minutes = Math.ceil(words.length / 120)
  return minutes
}

export function formatAllDateText(language, date, text) {
  return `${translatedDate(language, date)} • ${timeToRead(
    text
  )} ${translatedReadText(language)}`
}
