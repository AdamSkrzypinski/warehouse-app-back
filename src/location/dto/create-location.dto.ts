export class CreateAreaDto {
  name: string;
}

export class CreatePlaceDto {
  name: string;
  areaId: string;
}
