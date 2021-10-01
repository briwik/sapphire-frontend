import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const CANDY_REFERRAL_KEY = "CANDY-REF-KEY"

export const stakeFarm = async (masterChefContract, pid, amount, account) => {
  let referrer = localStorage.getItem(CANDY_REFERRAL_KEY)
  if (!referrer) {
    referrer = account
  }
  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  if (pid === 0) {
    const tx = await masterChefContract.enterStaking(value, { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.deposit(pid, value, referrer, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking(value, { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.withdraw(pid, value, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (masterChefContract, pid, account) => {
  let referrer = localStorage.getItem(CANDY_REFERRAL_KEY)
  if (!referrer) {
    referrer = account
  }

  const gasPrice = getGasPrice()
  if (pid === 0) {
    const tx = await masterChefContract.leaveStaking('0', { ...options, gasPrice })
    const receipt = await tx.wait()
    return receipt.status
  }

  const tx = await masterChefContract.deposit(pid, '0', referrer, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}