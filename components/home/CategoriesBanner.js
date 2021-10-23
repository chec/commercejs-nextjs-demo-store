import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';

const CategoriesBanner = ({ categories }) => (
  <div className="bg-brand300 py-5 collection-banner">
    <div className="custom-container py-5">
      <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
        Categories
      </p>

      <div className="row">
        { categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        )) }
      </div>
    </div>
  </div>
);

CategoriesBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoriesBanner.defaultProps = {
  categories: [],
};

export default connect((state) => state)(CategoriesBanner);
