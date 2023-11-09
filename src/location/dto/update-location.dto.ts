export class UpdateAreaDto {
  id: string;
  name: string;
}

export class UpdatePlaceDto {
  id: string;
  name: string;
  areaId: string;
}
