/** @format */

import { SectionProps } from 'deco/types.ts';
import { Listings as ListingsType } from 'site/types.ts';
import {
  gql,
  request,
} from 'https://deno.land/x/graphql_request@v4.1.0/mod.ts';

const query = gql`
  query SearchListings {
    searchListings {
      listings {
        id
        price
        address {
          street
        }
        images {
          filename
        }
      }
    }
  }
`;

export function LoadingFallback() {
  return (
    <div className="flex flex-col gap-4 w-52">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export async function loader(_req: Request) {
  const data = await request<{ searchListings: { listings: ListingsType } }>(
    'https://api.stg.emcasa.com/graphql_api',
    query
  );

  return { listingsLoader: data.searchListings.listings };
}

export default function Listings({
  listingsLoader,
}: SectionProps<typeof loader>) {
  console.log({ listingsLoader });
  if (!listingsLoader?.length) return <h1>Sem listings</h1>;

  return (
    <div className="container mt-12">
      <div className="grid grid-cols-4 gap-8">
        {listingsLoader.map((listing) => (
          <div className="card bg-base-100 shadow-xl ">
            <figure className="h-48">
              <img
                src={`https://res.cloudinary.com/emcasa/image/upload/f_auto,q_auto,c_fill,h_336/v1513818385/${listing.images[0].filename}`}
                alt="Shoes"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(listing.price)}
              </h2>
              <p>{listing.address.street}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
