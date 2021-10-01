import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SAP',
    lpAddresses: {
      97: '',
      56: '0xd90AeaD917b72f5BbCedC08CB02A05c80eCEe313',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SAP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5e9c751b8b97460bf94ea4f66556bbfe49485db6',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SAP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfdba8b7843559014a88c6f7b9817b44933e544f3',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'SAP-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x0b3af3cac9fd18e5ae62019ecb3f8a7f4b2210af',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
