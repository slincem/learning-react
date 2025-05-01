import { useState } from 'react'
import { TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        type='text'
        value={inputValue}
        onChange={(evt) => { setInputValue(evt.target.value) }}
        placeholder='What do you need to do?'
        autoFocus
      />
    </form>

  )
}
