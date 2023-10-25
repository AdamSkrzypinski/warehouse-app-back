import { CreateLocationDto } from '../location/dto/create-location.dto';

export interface LocationInterface {
  id: string;
  locationValues: CreateLocationDto;
}

export interface CreateLocationResponse {
  id?: string;
  isSuccess: boolean;
}
