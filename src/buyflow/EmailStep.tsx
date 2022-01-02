import React, { useState } from 'react'
import { ToBeUpdatedDataInterface } from './Buyflow'

interface EmailStepProps {
  cb: (toBeUpdatedData: ToBeUpdatedDataInterface[]) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <form>
      <div>
        Email:{' '}
        <input
          autoFocus
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button
        type="submit"
        onClick={() => props.cb([{ field: 'email', value: email }])}
      >
        Next
      </button>
    </form>
  )
}

export default EmailStep
