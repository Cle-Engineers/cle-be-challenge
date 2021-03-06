export type PitchDTO = {
  pitcherId: number;
  gameId: number;
  gameDate: string;
  pitchNum: number;
  pitchTypeId: number;
  pitchName: string;
  pitchType: string;
  pitchColor: string;
  x: number;
  y: number;
  velo: number;
  balls: number;
  strikes: number;
  swing: number;
  miss: number;
  inStrikeZone: number;
  cut: number;
  rise: number;
  batterId: number;
  batterShortName: string;
  batterName: string;
  resultPitchId: number;
  result: string;
  batApproachGroup: string;
};

export type PlayerOverviewDTO = {
  fullName: string;
  shortName: string;
  position: string;
  playerId: number;
  imgId: number;
  orgId: number;
  orgAbbr: string;
  teamAbbr: string;
};

export type PlayerDetailDTO = {
  fullName: string;
  shortName: string;
  position: string;
  playerId: number;
  imgId: number;
  ageDecimal: number;
  bats: string;
  throws: string;
  orgId: number;
  orgAbbr: string;
  teamAbbr: string;
  serviceTime: number;
  g: number;
  gs: number;
  ip: number;
  h: number;
  hr: number;
  bb: number;
  k: number;
  np: number;
  era: number;
  fip: number;
  hPer9: number;
  hrPer9: number;
  bbPer9: number;
  kPer9: number;
  walkRate: number;
  kRate: number;
  gbRate: number;
};
