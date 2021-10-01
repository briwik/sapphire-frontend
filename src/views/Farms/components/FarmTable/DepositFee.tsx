import React from 'react'
import styled from 'styled-components'
import { Text, HelpIcon, Skeleton, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const ReferenceElement = styled.div`
  display: inline-block;
`

export interface DepositFeeProps {
  depositFee?: number
}

const DepositFeeWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const DepositFee: React.FunctionComponent<DepositFeeProps> = ({ depositFee }) => {
  const displayFee = depositFee >= 0 ? `${depositFee / 100}%` : <Skeleton width={30} />
  const { t } = useTranslation()
  const tooltipContent = (
    <>
      <Text>
        {t(
          'The Deposit Fee will be used to buy back the SAP tokens.',
        )}
      </Text>
    </>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: 'top-end',
    tooltipOffset: [20, 10],
  })

  return (
    <Container>
      <DepositFeeWrapper>{displayFee}</DepositFeeWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  )
}

export default DepositFee
