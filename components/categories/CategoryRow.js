import ProductCard from '../product/ProductCard';

export default function CategoryRow({ categories, products }) {
  const reg = /(<([^>]+)>)/ig;

  /**
   * @description - This function is used to filter products by category
   */
   const filterProductsByCategory = (catSlug) => {
    const cat = categories.find((category) => category.slug === catSlug);

    if (!cat) {
      return [];
    }

    return products.filter((product) => product.categories.find((productCategory) => productCategory.id === cat.id));
  }

    return (
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-2">
          <div className="collection">
            {categories.map((category) => (
              <div key={category.id}>
                <p
                  className="font-size-title font-weight-medium mb-4"
                  id={category.slug}
                >
                  {category.name}
                </p>
                <div className="row mb-5 collection-1">
                  { filterProductsByCategory(category.slug).map((product) => (
                    <div
                      key={product.id}
                      className="col-6 col-sm-4 col-md-3"
                    >
                      <ProductCard
                        permalink={product.permalink}
                        image={product.image.url}
                        name={product.name}
                        price={product.price.formatted_with_symbol}
                        description={product.description && product.description.replace(reg, '')}
                        soldOut={product.is.sold_out}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
