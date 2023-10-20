import React from 'react'
import { useTheme } from 'theme/themeProvider'

type ContentTitleProps = {
  text: string
}

const ContentTitle: React.FC<ContentTitleProps> = ({ text }) => {
  const { theme } = useTheme()

  return (
    <h3 style={{ color: theme.colors.success }} className='text-center uppercase font-semibold'>
      {text}
    </h3>
  )
}

export default ContentTitle
