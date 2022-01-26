import React, { useState, useEffect } from 'react'
import { LoadingSvg } from './loadingSvg'

import { Wrapper } from './styles'

export const Loading = () => {
  const [step, setStep] = useState(1)

  useEffect(() => {
    const updateStep = () => {
      setStep((currentStep) => currentStep < 3 ? currentStep + 1 : 0)
    }

    const interval = setInterval(updateStep, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper>
      <div className='loading'>
        <LoadingSvg step={step} />
      </div>
    </Wrapper>
  )
}
