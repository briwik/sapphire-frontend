import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'
import { useWeb3React } from '@web3-react/core'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useMasterchef()
  const {account} = useWeb3React()

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterChefContract, farmPid, account)
  }, [farmPid, masterChefContract, account])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
