import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'
import { useWeb3React } from '@web3-react/core'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()
  const {account} = useWeb3React()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterChefContract, pid, amount, account)
      console.info(txHash)
    },
    [masterChefContract, pid, account],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
