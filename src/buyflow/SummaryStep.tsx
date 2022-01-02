import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    fname: string
    lname: string
    url: string
  }
  isDesignerInsurance: boolean
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const { collectedData, isDesignerInsurance } = props
  const { fname, lname, email, age } = collectedData

  return (
    <>
      {isDesignerInsurance && <div>First Name: {fname}</div>}
      {isDesignerInsurance && <div>Last Name: {lname}</div>}
      <div>Email: {email}</div>
      <div>Age: {age}</div>
      <div>
        <Link to={`/purchased=${props.collectedData.url}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
