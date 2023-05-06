import React from 'react'
import Input from './Input'

export default function Login({ setIsLogin }) {
  return (
    <div>
      <Input setIsLogin={setIsLogin} />
    </div>
  )
}
