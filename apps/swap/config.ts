import { ParachainId } from '@zenlink-interface/chain'

export const AMM_ENABLED_NETWORKS = [
  ParachainId.ASTAR,
  ParachainId.MOONRIVER,
  ParachainId.MOONBEAM,
  ParachainId.BIFROST_KUSAMA,
  ParachainId.BIFROST_POLKADOT,
  // ParachainId.AMPLITUDE,
]

export const AGGREGATOR_ENABLED_NETWORKS = [
  ParachainId.ASTAR,
  ParachainId.ARBITRUM_ONE,
  ParachainId.MOONBEAM,
  ParachainId.SCROLL_ALPHA,
  ParachainId.BASE,
]

export const REFERRALS_ENABLED_NETWORKS = [
  ParachainId.ASTAR,
  ParachainId.ARBITRUM_ONE,
  ParachainId.MOONBEAM,
  ParachainId.SCROLL_ALPHA,
  ParachainId.BASE,
]

export const SUPPORTED_CHAIN_IDS = Array.from(
  new Set([
    ...AGGREGATOR_ENABLED_NETWORKS,
    ...AMM_ENABLED_NETWORKS,
  ]),
)
