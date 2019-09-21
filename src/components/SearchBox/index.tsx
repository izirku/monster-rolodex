import React, { FC, ChangeEventHandler } from 'react'
import './style.css'

interface SearchProps {
  placeholder: string
  handleChange: ChangeEventHandler
}

const SearchBox: FC<SearchProps> = ({
  placeholder = 'search',
  handleChange
}: SearchProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default SearchBox
