import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Box, Card, Flex, Heading, Text } from '@pancakeswap/uikit'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
import { AppBody, AppHeader } from 'components/App'
import ConnectWalletButton from 'components/ConnectWalletButton'
import CopyAddress from 'components/Menu/UserMenu/CopyAddress'
import { BASE_URL } from 'config'
import styled from 'styled-components'

const ContentWrapper = styled(Card)`
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  z-index: 1;
  margin: auto;

  .link-section {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
  }
`

const ContentHeader = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Farms: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const referralLink = `${BASE_URL}/?ref=${account}`

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('Referrals')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Share your referral link to get rewards.')}
        </Heading>
      </PageHeader>
      <Page>
        <ContentWrapper>
          <ContentHeader>
            <Flex flexDirection="column">
              <Heading as="h2" mb="8px">
                Referral Link
              </Heading>
              <Text color="textSubtle" fontSize="14px">
                You will get 2% of referrers&apos; rewards from Farms.
              </Text>
              <Text color="textSubtle" fontSize="14px">
                {account ? "Please copy and share the link with others." : "Please connect wallet for getting referral link."}
              </Text>
            </Flex>
          </ContentHeader>

          <Flex pt="20px" pb="20px" justifyContent="center">
            {
              account ? <CopyAddress className="link-section" account={referralLink} />: <ConnectWalletButton />
            }
          </Flex>
        </ContentWrapper>
      </Page>
    </>
  )
}

export default Farms
