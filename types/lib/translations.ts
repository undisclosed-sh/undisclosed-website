export type Translation = {
  text: string
  contentType: 'text' | 'list' | 'richText' | 'richListItem'
}

export type TranslationList = {
  contentType: 'list'
  list: {
    text: string
    contentType: 'listItem' | 'richListItem'
  }[]
}
