import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Sapphire Finance',
  description:
    'The most popular AMM on BSC by user count! Earn SAP through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Sapphire Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://sapphireswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Sapphire Finance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Sapphire Finance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Sapphire Finance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Sapphire Finance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Sapphire Finance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Sapphire Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Sapphire Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Sapphire Finance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Sapphire Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Sapphire Finance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Sapphire Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Sapphire Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Sapphire Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Sapphire Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Sapphire Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Sapphire Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Sapphire Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Sapphire Finance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Sapphire Finance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Sapphire Finance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Sapphire Finance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Sapphire Finance Info & Analytics')}`,
        description: 'View statistics for Sapphire Finance exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Sapphire Finance Info & Analytics')}`,
        description: 'View statistics for Sapphire Finance exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('Sapphire Finance Info & Analytics')}`,
        description: 'View statistics for Sapphire Finance exchanges.',
      }
    default:
      return null
  }
}
