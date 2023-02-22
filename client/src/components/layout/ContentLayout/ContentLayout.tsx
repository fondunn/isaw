import React from 'react'
import styles from './ContentLayout.module.scss'
import { IContentLayout } from '../../../types/ContentLayout'
import { Text } from '@nextui-org/react'
import GradientText from '../../ui/GradientText/GradientText'

const ContentLayout = ({children, label} : IContentLayout) => {
  return (
    <>
      {
        label &&
        <div className={styles.container}>
          <GradientText text={label} size={30} />
        </div>
      }
      <div className={styles.content}>
      {children}
      </div>
    </>
  )
}

export default ContentLayout