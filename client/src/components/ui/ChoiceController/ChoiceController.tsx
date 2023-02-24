import { Button, Container, Row } from '@nextui-org/react'
import React from 'react'

const ChoiceController = () => {
  return (
    <Row justify="space-around" fluid gap={1}>
      <Button>Features</Button>
      <Button>Waiting</Button>
      <Button>Top</Button>
    </Row>
  )
}

export default ChoiceController