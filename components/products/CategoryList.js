import React from 'react';
import { connect } from 'react-redux';

/**
 * Renders a list of categories and the number of products in each category. Used for product list
 * view sidebars.
 */
export default connect(({ categories }) => ({ categories }))(
  ({ categories, current, ...platformProps }) => (
    <div {...platformProps}>
      <h3 className="font-size-title font-weight-medium mb-3">Products</h3>
      <ul style={{ 'listStyleType': 'none' }} className="pl-0">
        { categories.map(category => (
          <li style={{ 'fontWeight': current === category.id && 'bold' }} key={category.id}>
            { category.name }<sup>{ category.count }</sup>
          </li>
        )) }
      </ul>
    </div>
  )
);

