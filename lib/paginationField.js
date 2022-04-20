import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apolo we will tacke care of everything
    read(existing = [], { args, cache }) {
      //   console.log(existing, args, cache);
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // If there are items
      // AND there aren't enough items to to satisfy how many were requested
      // AND we are on the last page
      // THEN just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      // if there are items just return them from the cache, we don't need to go to the network
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to the network.`
        );
        return items;
      }

      return false;

      // First thing it does it asks the read fuction for the items
      // We can either do one or two things
      // First thing we can do is return the items before they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // This runs when the apollo client comes back from the network with our project
      //   console.log(`MErging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      //   console.log(merged);
      // finally we returned the merged items from the cache
      return merged;
    },
  };
}
