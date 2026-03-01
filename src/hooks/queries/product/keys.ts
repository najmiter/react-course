export class PRODUCTS_QUERY_KEYS {
  static ALL = ['all-products'] as const;

  static PRODUCT_BY_ID(id: string | number) {
    return ['product-by-id', id] as const; // ['product-by-id', 1], ['product-by-id', 10]
  }
}
