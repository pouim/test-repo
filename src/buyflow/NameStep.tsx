import React, { useState } from 'react'
import { ToBeUpdatedDataInterface } from './Buyflow'

interface NameStepProps {
  cb: (toBeUpdatedData: ToBeUpdatedDataInterface[]) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  return (
    <form>
      <div>
        First Name:{' '}
        <input
          autoFocus
          type="fname"
          onChange={({ target: { value } }) => {
            setFname(value)
          }}
          value={fname}
        ></input>
      </div>
      <div>
        Last Name:{' '}
        <input
          type="lname"
          onChange={({ target: { value } }) => {
            setLname(value)
          }}
          value={lname}
        ></input>
      </div>
      <button
        type="submit"
        onClick={() =>
          props.cb([
            { field: 'fname', value: fname },
            { field: 'lname', value: lname },
          ])
        }
      >
        Next
      </button>
    </form>
  )
}

export default NameStep
