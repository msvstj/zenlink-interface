import type { BlockNumber } from '@polkadot/types/interfaces'
import { useApi } from './useApi'
import { useCall } from './useCall'

export function useBlockNumber(chainId?: number): BlockNumber | undefined {
  const api = useApi(chainId)

  return useCall<BlockNumber>({ chainId, fn: api?.derive.chain.bestNumber })
}
