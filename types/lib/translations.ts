export type Translation = {
  text: string
  contentType: 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'list' | 'richText' | 'richListItem'
}

export type TranslationList = {
  contentType: 'list'
  list: {
    text: string
    contentType: 'listItem' | 'richListItem'
  }[]
}
