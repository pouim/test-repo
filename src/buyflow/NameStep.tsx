import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string, field2: string, value2: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  return (
    <>
      <div>
        First Name:{' '}
        <input
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
      <button onClick={() => props.cb('fname', fname, 'lname', lname)}>
        Next
      </button>
    </>
  )
}

export default NameStep
