export interface IMarketSummarise {
  market: string;
  marketId: number;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
}

export interface ICoin {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  tradingStatus: string;
  ceiling: number;
  floor: number;
}

export interface IMarketHeader {
  title: string;
  list: Array<ICoin>;
}
