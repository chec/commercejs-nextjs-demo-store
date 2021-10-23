import Link from 'next/link';

export default function Sidebar({ categories, sidebarRef }) {
  return (
    <div
      ref={sidebarRef}
      className="position-fixed left-0 right-0"
      style={{ top: '7.5rem' }}
    >
      { categories.map((category) => (
        <div
          key={category.id}
          className="custom-container"
        >
          <div className="row">
            <div className="col-2 d-none d-lg-block position-relative">
              <p className="font-size-title font-weight-medium mb-3">
                {category.name}
              </p>
              <Link href={`/collection#${category.slug}`}>
                <a className="mb-5 font-color-black">
                  <div className="d-flex">
                    <p className="mb-2 position-relative cursor-pointer">
                      Products
                      <span
                        className="position-absolute font-size-tiny text-right"
                        style={{ right: '-12px', top: '-4px' }}
                      >
                        {category.products}
                      </span>
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
};
