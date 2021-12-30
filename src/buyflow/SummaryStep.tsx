import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    fname: string
    url: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { collectedData } = props
  const { fname, email, age } = collectedData

  return (
    <>
      {fname.length !== 0 && <div>First Name: {fname}</div>}
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      <div>
        <Link to={`/purchased=${props.collectedData.url}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
