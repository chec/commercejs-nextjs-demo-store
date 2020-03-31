import React, { Component } from "react";
import Link from "next/link";
import commerce from '../../lib/commerce';

const collections = [
  {
    image: "/images/collection/1.png",
    name: "Facial Products",
    link: "/collection",
    translateRatio: 30,
  },
  {
    image: "/images/collection/2.png",
    name: "Body Products",
    link: "/collection",
    translateRatio: 0,
  },
  {
    image: "/images/collection/3.png",
    name: "Hair Products",
    link: "/collection",
    translateRatio: 60,
  }
];

export default class CategoryBanner extends Component {
  constructor(props) {
    super(props);

    this.collectionBannerContainer = React.createRef();
    this.category = [];

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    this.fetchCategories();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(this.animate);
  };

  animate = () => {
    const dimentions = this.collectionBannerContainer.current.getBoundingClientRect();
    var x = window.matchMedia("(min-width: 768px)");

    if (x.matches) {
      if (dimentions.top - window.innerHeight < 0 && dimentions.bottom > 0) {
        const scrolledRatio =
          (window.innerHeight - dimentions.top) / window.innerHeight;

        this.category.forEach((image, index) => {
          image.style.transform = `translateY(-${scrolledRatio *
            collections[index].translateRatio}px)`;
        });
      }
    }
  };

  /**
  * Fetch categories data from API
  */
  fetchCategories() {
    commerce.categories.list()
    .then(res => {
      //Success
      this.setState({
        categories: res.data
      });
    })
    .catch(
      (error) => {
        // Error
        console.log(error)
      }
    );
  }

  render() {
    const { categories } = this.state; 

    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div
          ref={this.collectionBannerContainer}
          className="custom-container py-5"
        >
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categories
          </p>
          
          <div className="row">
            {collections.map((item) => (
              <div
                key={item.id}
                ref={item => this.category.push(item)}
                className="col-12 col-md-4 collection-item mb-5"
              >
                <Link href={item.link}>
                <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                <div>
                  
                    <div
                      className="mb-4 w-100 collection-item-image"
                      style={{
                        background: `url("${item.image}") center center/cover`
                      }}
                    />
                    {categories.map((category) => (
                    <p className="mb-2 font-size-heading text-center" key={category.id}>
                    {category.name}
                    </p>
                    ))}
                    <p className="text-center">{item.number} products</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}