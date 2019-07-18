export const SEARCH_FLOWER = 'SEARCH_FLOWER';
export const FAVORITE_FLOWERS = 'FAVORITE_FLOWERS';

export function search(inputText) {
  return { type: SEARCH_FLOWER, inputText };
}

export function favorite(id) {
  return { type: FAVORITE_FLOWERS, id };
}