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
import TokenB80RAFT20ETH from './TokenB80RAFT20ETH';
import NetworkEthereum from './NetworkEthereum';
import NetworkArbitrum from './NetworkArbitrum';
import NetworkOptimism from './NetworkOptimism';
import NetworkPolygon from './NetworkPolygon';
import NetworkBase from './NetworkBase';
import NetworkZkSync from './NetworkZkSync';

export type LogoType =
  | 'token-ETH'
  | 'token-ETH-light'
  | 'token-USDC'
  | 'token-USDT'
  | 'token-DAI'
  | 'token-sDAI'
  | 'token-R'
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
  | 'token-B-80RAFT-20ETH'
  | 'token-B-80RAFT-20WETH'
  | 'network-ethereum'
  | 'network-arbitrum'
  | 'network-optimism'
  | 'network-polygon'
  | 'network-base'
  | 'network-zksync';
export type LogoMap = { [k in string]: FC<LogoProps> };

const DEFAULT_LogoS: LogoMap = {
  'token-ETH': TokenETH,
  'token-ETH-light': TokenETHLight,
  'token-USDC': TokenUSDC,
  'token-USDT': TokenUSDT,
  'token-DAI': TokenDAI,
  'token-sDAI': TokenSDAI,
  'token-R': TokenR,
  'token-FTM': TokenFTM,
  'token-MIM': TokenMIM,
  'token-RARI': TokenRARI,
  'token-YFI': TokenYFI,
  'token-wBTC': TokenWBTC,
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
  'token-B-80RAFT-20ETH': TokenB80RAFT20ETH,
  'token-B-80RAFT-20WETH': TokenB80RAFT20ETH,
  'network-ethereum': NetworkEthereum,
  'network-arbitrum': NetworkArbitrum,
  'network-optimism': NetworkOptimism,
  'network-polygon': NetworkPolygon,
  'network-base': NetworkBase,
  'network-zksync': NetworkZkSync,
};

export interface LogoGenericProps<T extends string> extends LogoProps {
  type: T;
  LogoMap?: LogoMap;
}

const TokenLogo = <T extends string = LogoType>(props: LogoGenericProps<T>) => {
  const { type, LogoMap = DEFAULT_LogoS, ...LogoProps } = props;

  const LogoComponent = LogoMap[type];

  if (!LogoComponent) {
    return null;
  }

  return <LogoComponent {...LogoProps} />;
};

export default TokenLogo;
