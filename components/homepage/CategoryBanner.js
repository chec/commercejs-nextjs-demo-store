import React, { Component } from "react";
import Link from "next/link";
import commerce from '../../lib/commerce';

const collections = [
  {
    image: "/images/collection/1.png",
    name: "Skin Products",
    number: "20",
    link: "/collection",
    translateRatio: 30
  },
  {
    image: "/images/collection/2.png",
    name: "Beard Products",
    number: "20",
    link: "/collection",
    translateRatio: 0
  },
  {
    image: "/images/collection/3.png",
    name: "Hair Products",
    number: "20",
    link: "/collection",
    translateRatio: 60
  }
];

export default class CategoryBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: {
        data: [],
        testNum: "20" 
      }
    }

    this.collectionBannerContainer = React.createRef();
    this.category = [];
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    commerce.categories.list()
    .then(res => {
      //Success
      this.setState({
        categories: {
          data: res.data
        }
      });
    })
    .catch(
      (error) => {
        // Error
        console.log(error)
      }
    );
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
          <div>
          {categories.data.map((cat, index) => ( 
            <p className="mb-2 font-size-heading text-center">
              {cat.name}
            </p>
          ))}

          </div>
          <div className="row">
            {collections.map((item, index) => (
              <div
                key={`category-item-${index}`}
                ref={item => this.category.push(item)}
                className="col-12 col-md-4 collection-item mb-5"
              >
                <Link href={item.link}>
                  <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                    <div
                      className="mb-4 w-100 collection-item-image"
                      style={{
                        background: `url("${item.image}") center center/cover`
                      }}
                    />
                    <p className="mb-2 font-size-heading text-center">
                      {item.name}
                    </p>
                    <p className="text-center">{item.number} products</p>
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