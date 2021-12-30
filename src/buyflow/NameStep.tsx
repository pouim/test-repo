import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [fname, setFname] = useState('')
  //   const [lname, setLname] = useState('')
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
      <button onClick={() => props.cb('fname', fname)}>Next</button>
    </>
  )
}

export default NameStep
