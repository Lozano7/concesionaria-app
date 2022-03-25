export interface ApiDatum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  name: string;
  data: AttributesDatum[];
}

export interface AttributesDatum {
  name: string;
  imgURL: string;
  data: VehicleData;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface VehicleData {
  age: string;
  price: number;
  specifications: string[];
  power: Power;
  packages: Package[];
  accessories: Accessories;
  colors: string[];
}

export interface Accessories {
  kit: Package[];
  individual: Package[];
  'mant-prepaid': Package[];
}

export interface Package {
  name: string;
  description?: string[];
  price?: number;
  imgURL?: string;
}

export interface Power {
  motor: Package[];
  transmission: Package[];
  traction?: Package[];
}
