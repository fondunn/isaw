import ContentLayout from '@/components/layout/ContentLayout/ContentLayout'
import ChoiceController from '@/components/ui/ChoiceController/ChoiceController'
import React from 'react'

const Features = () => {
  const [label, setLabel] = React.useState('Features')
  return (
  <ContentLayout label={label}>
    <ChoiceController />
  </ContentLayout>
  )
}

export default Features