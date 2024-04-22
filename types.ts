/** @format */

import { ImageWidget } from 'apps/admin/widgets.ts';

export interface Logo {
  img?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  link?: string;
}

export interface Listing {
  id: string;
  price: number;
  address: {
    street: string;
  };
  images: Array<{
    filename: string;
  }>;
}

export type Listings = Array<Listing>;
