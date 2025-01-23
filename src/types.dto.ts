export interface MedalDataDto {
  country: string;
  gold: number;
  sliver: number;
  bronze: number;
}

export interface MedalRecordDto extends MedalDataDto {
  id: string;
  total: number;
}
