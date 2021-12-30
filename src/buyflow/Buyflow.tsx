import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
// import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
}
const URL = {
  [ProductIds.devIns]: 'dev_ins',
  [ProductIds.desIns]: 'des_ins',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('age')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    fname: '',
    url: URL[props.productId],
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {/* {PRODUCT_IDS_TO_NAMES[props.productId] === 'Designer Insurance' &&
        currentStep === 'fname' && <NameStep cb={getStepCallback('email')} />} */}
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
