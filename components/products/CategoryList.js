import React from 'react';
import { connect } from 'react-redux';

export default connect(({ categories }) => ({ categories }))(({ categories, current }) => (
  <div className="custom-container">
    <h3 className="font-size-title font-weight-medium mb-3">Products</h3>
    <ul style={{ 'listStyleType': 'none' }} className="pl-0">
      { categories.map(category => (
        <li style={{ 'fontWeight': current === category.id && 'bold' }} key={category.id}>
          { category.name }<sup>{ category.count }</sup>
        </li>
      )) }
    </ul>
  </div>
));

