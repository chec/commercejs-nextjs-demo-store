import Link from 'next/link';

export default function CategoryCard({ category }) {
  const renderCategoryImage = () => {
    if (!category.assets.length) {
      return;
    }

    return (
      <div
        className="mb-4 w-100 collection-item-image"
        style={{
          background: `url("${category.meta.image}") center center/cover`,
        }}
      />
    );
  };

  return (
    <div className="col-12 col-md-4 collection-item mb-5">
      <Link
        href={`/collection#${category.slug}`}
      >
        <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
          <div>
            { renderCategoryImage() }
            <p className="mb-2 font-size-heading text-center">
              {category.name}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
