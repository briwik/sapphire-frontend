import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '#',
      },
      {
        label: t('Blog'),
        href: '#',
      },
      {
        label: t('Community'),
        href: '#',
      },
      {
        label: t('SAP token'),
        href: '#',
      },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '#',
      },
      {
        label: t('Troubleshooting'),
        href: '#',
      },
      {
        label: t('Guides'),
        href: '#',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sapphire-finance',
      },
      {
        label: t('Documentation'),
        href: '#',
      },
      {
        label: t('Bug Bounty'),
        href: '#',
      },
      {
        label: t('Audits'),
        href: '#',
      },
      {
        label: t('Careers'),
        href: '#',
      },
    ],
  },
]
