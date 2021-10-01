import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getCakeContract, getMasterchefContract } from 'utils/contractHelpers'
import useRefresh from './useRefresh'

export const useEmissionPerBlock = () => {
  const { slowRefresh } = useRefresh()
  const [emissionPerBlock, setEmissionPerBlock] = useState<BigNumber>()

  useEffect(() => {
    async function fetchEmissionValue() {
      
      const masterChefContract = getMasterchefContract()
      const emissionValue = await masterChefContract.sapPerBlock()
      setEmissionPerBlock(new BigNumber(emissionValue.toString()))
    }

    fetchEmissionValue()
  }, [slowRefresh])

  return emissionPerBlock
}

export default useEmissionPerBlock
