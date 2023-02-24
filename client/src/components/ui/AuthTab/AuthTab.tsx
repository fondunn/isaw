import { Col, Image, Row, Spacer, css } from '@nextui-org/react'
import React from 'react'
export type TTextSide = 'left' | 'right'
export interface IAuthProps {
  label? : string,
  imgPath?: string,
  textSide?: TTextSide,
  children?: React.ReactNode
}

const AuthTab = ({label,imgPath = '',textSide = 'left', children}: IAuthProps) => {
  return (
    <Row css={textSide === 'left' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
      <Col css={{textAlign: 'center'}}>
      <h2>{label}</h2>
      <Col css={{mt: 'auto', mb: 'auto'}}>
      {children}
      </Col>
      </Col>
      <Spacer css={{'@xsMax' : {
        display: 'none'
      }}}/>  
      <Col css={{'@xsMax' : {
        display: 'none'
      }}}>
        <Image showSkeleton={!imgPath ? true : false} objectFit="cover" height={500} src={imgPath} alt="" />
      </Col>
      
    </Row>
  )
}

export default AuthTab