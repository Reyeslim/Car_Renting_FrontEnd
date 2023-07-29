import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/footer'
import { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  return <Header onLogout={onLogout} />
}

export default memo(Dashboard)
