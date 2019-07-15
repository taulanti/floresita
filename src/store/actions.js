export const SEARCH_FLOWER = 'SEARCH_FLOWER';

export function search(inputText) {
  return { type: SEARCH_FLOWER, inputText };
}