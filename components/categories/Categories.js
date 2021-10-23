import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar'
import CategoryRow from './CategoryRow';

const Categories = ({ categories, products }) => {
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  /**
   * @description - Handles the scroll event to show/hide the sidebar
   */
  const handleScroll = () => {
    // Get the current scroll position and size of the category and sidebar container
    const { bottom } = containerRef.current.getBoundingClientRect();

    const animateScroll = () => {
      if (!containerRef.current) {
        return;
      }

      // Get the distance from the bottom of the category container to the bottom of the window
      const distance = bottom - window.innerHeight;

      // If the distance is less than 0, move the sidebar to the top of the category container
      if (distance < 0) {
        sidebarRef.current.style.transform = `translateY(${distance}px)`;
      //  If the distance is more than the sidebar height, don't move the sidebar
      } else {
        sidebarRef.current.style.transform = 'translateY(0px)';
      }
    };

    window.requestAnimationFrame(animateScroll);
  }

    return (
      <div className="py-5 my-5">
        <Head>
          <title>Categories</title>
        </Head>
        <div className="py-4">
          {/* Sidebar */}
          <Sidebar
            sidebarRef={sidebarRef}
            categories={categories}
          />

          {/* Main category container */}
          <div
            ref={containerRef}
            className="custom-container"
          >
            <CategoryRow
              categories={categories}
              products={products}
            />
          </div>
        </div>
      </div>
    );
}

export default connect((state) => state)(Categories);
