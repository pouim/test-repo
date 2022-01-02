import React, { useState } from 'react'
import { ToBeUpdatedDataInterface } from './Buyflow'

interface AgeStepProps {
  cb: (toBeUpdatedData: ToBeUpdatedDataInterface[]) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <form>
      <div>
        Age:{' '}
        <input
          autoFocus
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button
        type="submit"
        onClick={() => props.cb([{ field: 'age', value: age }])}
      >
        Next
      </button>
    </form>
  )
}

export default AgeStep
