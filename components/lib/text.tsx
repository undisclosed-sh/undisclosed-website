import { createElement, memo } from "react";

export interface TextProps {
  children?: React.ReactNode
  componentType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'strong' | 'small'
}

export const Text = memo(({ componentType, ...props }: TextProps) => {
  const Component = createElement(componentType, props)
  return Component
})

Text.displayName = 'Text'
