import { FC } from 'react';
import { LogoProps } from './LogoProps';
import TokenETH from './TokenETH';
import TokenETHLight from './TokenETHLight';
import TokenUSDC from './TokenUSDC';
import TokenUSDT from './TokenUSDT';
import TokenDAI from './TokenDAI';
import TokenR from './TokenR';
import TokenFTM from './TokenFTM';
import TokenMIM from './TokenMIM';
import TokenRARI from './TokenRARI';
import TokenYFI from './TokenYFI';
import TokenWBTC from './TokenWBTC';
import TokenWBTCDark from './TokenWBTCDark';
import TokenWETH from './TokenWETH';
import TokenWFTM from './TokenWFTM';
import TokenStETH from './TokenStETH';
import TokenWstETH from './TokenWstETH';
import TokenYvUSDC from './TokenYvUSDC';
import TokenYvUSDT from './TokenYvUSDT';
import TokenYvDAI from './TokenYvDAI';
import TokenYvBTC from './TokenYvBTC';
import TokenYvYFI from './TokenYvYFI';
import TokenYvWETH from './TokenYvWETH';
import TokenBTC from './TokenBTC';
import TokenTEMP from './TokenTEMP';
import TokenBUSD from './TokenBUSD';
import TokenSHIB from './TokenSHIB';
import TokenRETH from './TokenRETH';
import TokenSDAI from './TokenSDAI';
import TokenRAFT from './TokenRAFT';
import TokenVeRAFT from './TokenVeRAFT';
import TokenRaftBpt from './TokenRaftBpt';
import NetworkEthereum from './NetworkEthereum';
import NetworkArbitrum from './NetworkArbitrum';
import NetworkOptimism from './NetworkOptimism';
import NetworkPolygon from './NetworkPolygon';
import NetworkBase from './NetworkBase';
import NetworkZkSync from './NetworkZkSync';
import TokenSwETH from './TokenSwETH';
import TokenCbEth from './TokenCbEth';
import TokenRR from './TokenRR';
import TokenLORDS from './TokenLORDS';
import TokenSTRK from './TokenSTRK';
import TokenBRRR from './TokenBRRR';
import TokenSTRONK from './TokenSTRONK';
import TokenTONY from './TokenTONY';
import TokenAKU from './TokenAKU';
import TokenNstSTRK from './TokenNstSTRK';
import TokenUNO from './TokenUNO';
import TokenPAL from './TokenPAL';
import TokenNSTR from './TokenNSTR';

export type LogoType =
  | 'token-ETH'
  | 'token-ETH-light'
  | 'token-USDC'
  | 'token-USDT'
  | 'token-DAI'
  | 'token-sDAI'
  | 'token-R'
  | 'token-RR'
  | 'token-FTM'
  | 'token-MIM'
  | 'token-RARI'
  | 'token-YFI'
  | 'token-wBTC'
  | 'token-wBTC-dark'
  | 'token-WETH'
  | 'token-wFTM'
  | 'token-stETH'
  | 'token-wstETH'
  | 'token-yvUSDC'
  | 'token-yvUSDT'
  | 'token-yvDAI'
  | 'token-yvBTC'
  | 'token-yvYFI'
  | 'token-yvWETH'
  | 'token-WBTC'
  | 'token-TEMP'
  | 'token-BUSD'
  | 'token-SHIB'
  | 'token-rETH'
  | 'token-RAFT'
  | 'token-veRAFT'
  | 'token-swETH'
  | 'token-cbETH'
  | 'token-RAFT-BPT'
  | 'token-LORDS'
  | 'token-STRK'
  | 'token-BRRR'
  | 'token-STRONK'
  | 'token-TONY'
  | 'token-AKU'
  | 'token-nstSTRK'
  | 'token-UNO'
  | 'token-PAL'
  | 'network-mainnet'
  | 'network-ethereum'
  | 'network-arbitrum'
  | 'network-optimism'
  | 'network-polygon'
  | 'network-base'
  | 'network-zksync';
export type LogoMap = { [k in string]: FC<LogoProps> };

export const DEFAULT_LOGO_MAP: LogoMap = {
  'token-ETH': TokenETH,
  'token-ETH-light': TokenETHLight,
  'token-USDC': TokenUSDC,
  'token-USDT': TokenUSDT,
  'token-DAI': TokenDAI,
  'token-sDAI': TokenSDAI,
  'token-R': TokenR,
  'token-RR': TokenRR,
  'token-FTM': TokenFTM,
  'token-MIM': TokenMIM,
  'token-RARI': TokenRARI,
  'token-YFI': TokenYFI,
  'token-wBTC': TokenWBTC,
  'token-WBTC': TokenWBTC,
  'token-wBTC-dark': TokenWBTCDark,
  'token-WETH': TokenWETH,
  'token-wFTM': TokenWFTM,
  'token-stETH': TokenStETH,
  'token-wstETH': TokenWstETH,
  'token-yvUSDC': TokenYvUSDC,
  'token-yvUSDT': TokenYvUSDT,
  'token-yvDAI': TokenYvDAI,
  'token-yvBTC': TokenYvBTC,
  'token-yvYFI': TokenYvYFI,
  'token-yvWETH': TokenYvWETH,
  'token-BTC': TokenBTC,
  'token-TEMP': TokenTEMP,
  'token-BUSD': TokenBUSD,
  'token-SHIB': TokenSHIB,
  'token-rETH': TokenRETH,
  'token-RAFT': TokenRAFT,
  'token-veRAFT': TokenVeRAFT,
  'token-swETH': TokenSwETH,
  'token-cbETH': TokenCbEth,
  'token-RAFT-BPT': TokenRaftBpt,
  'token-LORDS': TokenLORDS,
  'token-STRK': TokenSTRK,
  'token-BRRR': TokenBRRR,
  'token-STRONK': TokenSTRONK,
  'token-TONY': TokenTONY,
  'token-AKU': TokenAKU,
  'token-nstSTRK': TokenNstSTRK,
  'token-UNO': TokenUNO,
  'token-PAL': TokenPAL,
  'token-NSTR': TokenNSTR,
  'network-mainnet': NetworkEthereum,
  'network-ethereum': NetworkEthereum,
  'network-arbitrum': NetworkArbitrum,
  'network-optimism': NetworkOptimism,
  'network-polygon': NetworkPolygon,
  'network-base': NetworkBase,
  'network-zksync': NetworkZkSync,
};

export interface LogoGenericProps<T extends string> extends LogoProps {
  type: T;
  logoMap?: LogoMap;
}

const TokenLogo = <T extends string = LogoType>(props: LogoGenericProps<T>) => {
  const { type, logoMap = DEFAULT_LOGO_MAP, ...LogoProps } = props;

  const LogoComponent = logoMap[type];

  if (!LogoComponent) {
    return null;
  }

  return <LogoComponent {...LogoProps} />;
};

export default TokenLogo;
