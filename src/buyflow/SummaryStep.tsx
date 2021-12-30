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
  return (
    <>
      <div>First Name: {props.collectedData.fname}</div>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to={`/purchased=${props.collectedData.url}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
