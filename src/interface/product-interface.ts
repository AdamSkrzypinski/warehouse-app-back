export interface ProductInterface {
  id: string;
  name: string;
  count: number;
  measure: string;
  createdAt: string;
}

export interface CreateProductResponse {
  id?: string;
  isSuccess: boolean;
}
