export interface CreateAreaResponse {
  id?: string;
  isSuccess: boolean;
}

export type CreatePlaceResponse = CreateAreaResponse;

export type UpdateAreaResponse = CreateAreaResponse;

export type UpdatePlaceResponse = CreateAreaResponse;

export type DeleteAreaResponse = CreateAreaResponse;

export type DeletePlaceResponse = CreateAreaResponse;
