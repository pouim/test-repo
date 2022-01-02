import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
  isDesignerInsurance?: boolean
}

export interface ToBeUpdatedDataInterface {
  field: string
  value: string | number
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
  const getStepCallback = (nextStep: string) => (
    toBeUpdatedData: ToBeUpdatedDataInterface[]
  ) => {
    // to avoid unnecessary rerenders
    Promise.resolve().then(() => {
      updateData({
        ...collectedData,
        [toBeUpdatedData[0].field]: toBeUpdatedData[0].value,
        [toBeUpdatedData[1]?.field]: toBeUpdatedData[1]?.value,
      })
      setStep(nextStep)
    })
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
          <SummaryStep
            collectedData={collectedData}
            isDesignerInsurance={isDesignerInsurance}
          />
        ))}
    </>
  )
}

export default Buyflow
