import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
  isDesignerInsurance?: boolean
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
  const { isDesignerInsurance = false, productId } = props

  const initialCurrentStep: string = isDesignerInsurance ? 'fname' : 'email'

  const [currentStep, setStep] = useState(initialCurrentStep)
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    fname: '',
    lname: '',
    url: URL[productId],
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {(currentStep === 'fname' && (
        <NameStep cb={getStepCallback('email')} />
      )) ||
        (currentStep === 'email' && (
          <EmailStep cb={getStepCallback('age')} />
        )) ||
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
