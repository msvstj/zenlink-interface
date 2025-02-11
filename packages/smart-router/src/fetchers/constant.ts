import type { MinimalImplLiquidityProvider } from '../liquidity-providers'
import {
  AerodromeProvider,
  ArthSwapProvider,
  ArthSwapV3Provider,
  BaseSwapProvider,
  BeamStableProvider,
  BeamSwapV3Provider,
  BeamexProvider,
  CurveStableProvider,
  DodoV2Provider,
  GmxProvider,
  IZumiSwapProvider,
  LiquidityProviders,
  SiriusProvider,
  StellaStableProvider,
  StellaSwapV2Provider,
  StellaSwapV3Provider,
  SushiProvider,
  SushiV3Provider,
  SyncswapProvider,
  TraderJoeV2Provider,
  UniswapV3Provider,
  ZenlinkProvider,
  ZenlinkStableSwapProvider,
  ZyberSwapV3Provider,
} from '../liquidity-providers'

export const LIQUIDITY_PROVIDERS_MAP: Record<string, typeof MinimalImplLiquidityProvider> = {
  [LiquidityProviders.Zenlink]: ZenlinkProvider,
  [LiquidityProviders.ZenlinkStableSwap]: ZenlinkStableSwapProvider,
  [LiquidityProviders.ArthSwapV2]: ArthSwapProvider,
  [LiquidityProviders.ArthSwapV3]: ArthSwapV3Provider,
  [LiquidityProviders.Sirius]: SiriusProvider,
  [LiquidityProviders.GMX]: GmxProvider,
  [LiquidityProviders.UniswapV3]: UniswapV3Provider,
  [LiquidityProviders.SushiSwap]: SushiProvider,
  [LiquidityProviders.SushiSwapV3]: SushiV3Provider,
  [LiquidityProviders.TraderJoeV2]: TraderJoeV2Provider,
  [LiquidityProviders.ZyberswapV3]: ZyberSwapV3Provider,
  [LiquidityProviders.Curve]: CurveStableProvider,
  [LiquidityProviders.StellaStable]: StellaStableProvider,
  [LiquidityProviders.StellaSwapV2]: StellaSwapV2Provider,
  [LiquidityProviders.StellaSwapV3]: StellaSwapV3Provider,
  [LiquidityProviders.BeamswapV3]: BeamSwapV3Provider,
  [LiquidityProviders.BeamStable]: BeamStableProvider,
  [LiquidityProviders.Beamex]: BeamexProvider,
  [LiquidityProviders.Izumiswap]: IZumiSwapProvider,
  [LiquidityProviders.DODOV2]: DodoV2Provider,
  [LiquidityProviders.Syncswap]: SyncswapProvider,
  [LiquidityProviders.BaseSwap]: BaseSwapProvider,
  [LiquidityProviders.Aerodrome]: AerodromeProvider,
}

export const LIQUIDITY_PROVIDERS: LiquidityProviders[] = [
  LiquidityProviders.Zenlink,
  LiquidityProviders.ZenlinkStableSwap,
  LiquidityProviders.ArthSwapV2,
  LiquidityProviders.ArthSwapV3,
  LiquidityProviders.Sirius,
  LiquidityProviders.GMX,
  LiquidityProviders.UniswapV3,
  LiquidityProviders.SushiSwap,
  LiquidityProviders.SushiSwapV3,
  LiquidityProviders.TraderJoeV2,
  LiquidityProviders.ZyberswapV3,
  LiquidityProviders.Curve,
  LiquidityProviders.StellaStable,
  LiquidityProviders.StellaSwapV2,
  LiquidityProviders.StellaSwapV3,
  LiquidityProviders.BeamswapV3,
  LiquidityProviders.BeamStable,
  LiquidityProviders.Beamex,
  LiquidityProviders.Izumiswap,
  LiquidityProviders.DODOV2,
  LiquidityProviders.Syncswap,
  LiquidityProviders.BaseSwap,
  LiquidityProviders.Aerodrome,
]
