import React from 'react'
import ReactRouter from './router'
import { useRecoilValue } from 'recoil'
import { authenticatedUser } from './store'

export default function App() {
  const auth = useRecoilValue(authenticatedUser)
  console.log(auth)
  return (
    <div>
      <ReactRouter />
    </div>
  )
}
