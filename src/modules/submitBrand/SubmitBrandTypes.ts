export interface Brand {
  id: number;
  name: string;
  checked: boolean;
}

export interface Image {
  id: number;
  link: string;
  brands: Brand[];
}
