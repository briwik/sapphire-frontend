import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    hideSubNav: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      }
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/lottery',
  //   icon: 'Trophy',
  //   items: [
  //     // {
  //     //   label: t('Prediction (BETA)'),
  //     //   href: '/prediction',
  //     // },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: '/#',
  //   icon: 'Nft',
  //   showOnMobile: false,
  //   showItemsOnMobile: false,
  //   items: [
  //     {
  //       label: t('Collectibles'),
  //       href: '/#',
  //     },
  //   ],
  // },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Chart'),
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x5e9c751b8b97460bf94ea4f66556bbfe49485db6',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Bridge'),
        href: 'https://www.binance.org/en/bridge',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      // {
      //   label: t('Info'),
      //   href: '/info',
      // },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
