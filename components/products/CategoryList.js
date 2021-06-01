import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

/**
 * Renders a list of categories and the number of products in each category. Used for product list
 * view sidebars.
 */
export default connect(({ categories }) => ({ categories }))(
  ({ categories, current, className }) => (
    <div className={className}>
      <h3 className="font-size-title font-weight-medium mb-3">Products</h3>
      <ul style={{ 'listStyleType': 'none' }} className="pl-0">
        { categories.map(category => (
          <Link href={`/collection#${category.slug}`} key={category.slug}>
            <li
              style={{ 'fontWeight': current === category.id && 'bold' }}
              key={category.id} className="pb-2 cursor-pointer"
            >
              { category.name }<sup>{ category.products }</sup>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
);
