export interface Car {
  id: number;
  category: string;
  name: string;
  description: string;
  images: string[];

  performance: {
    key: string;
    value: string | number;
    label: string;
    unit?: string;
    icon: string;
  }[];

  highlights: string[];
}