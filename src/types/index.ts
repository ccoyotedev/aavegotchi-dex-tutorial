export interface Gotchi {
  collateral: string;
  id: string;
  name: string;
  withSetsNumericTraits: Array<Number>;
}
 
export interface QueryResponse {
  aavegotchis: Array<Gotchi>
}

export interface Collateral {
  collateralType: string;
  collateralTypeInfo: {
    cheekColor: string;
    conversionRate: string;
    delisted: boolean;
    eyeShapeSvgId: string;
    modifiers: Array<string>;
    primaryColor: string;
    secondaryColor: string;
    svgId: string;
  }
}