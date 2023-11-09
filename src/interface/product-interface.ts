export interface ProductInterface {
  id: string;
  name: string;
  count: number;
  measure: string;
  createdAt: Date;
}

export interface CreateProductResponse {
  id?: string;
  isSuccess: boolean;
}

export interface UpdateProductResponse {
  id?: string;
  isSuccess: boolean;
}

export interface DeleteProductResponse {
  id?: string;
  isSuccess: boolean;
}
