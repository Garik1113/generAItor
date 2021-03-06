import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PricingCart extends Component {
  render() {
    const { title, lineOne, lineTwo, lineThree, price } = this.props;

    return (
      <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
        <div className="pricing-center-rectangle">
          <div className="text-center">
            <h4 className="pricing-free">{title}</h4>
            <div className="pricing-list-wrapper">
              <ul>
                <li className="pricing-list-item">
                  <img src="images/vector.png" alt="Vektor" />
                  {lineOne}
                </li>
                <li className="pricing-list-item">
                  <img src="images/vector.png" alt="Vektor" />
                  {lineTwo}
                </li>
                <li className="pricing-list-item">
                  <img src="images/vector.png" alt="Vektor" />
                  {lineThree}
                </li>
              </ul>
            </div>

            <div className="pricing-price">
              <span className="pricing-price-usd">USD</span>
              <span className="pricing-price-num">{price}</span>
            </div>

            <div className="pricing-subscribe-btn">
              <div>
                <a className="pricing-btn-text" href="#">
                  subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PricingCart.propTypes = {
  title: PropTypes.string.isRequired,
  lineOne: PropTypes.string.isRequired,
  lineTwo: PropTypes.string.isRequired,
  lineThree: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default PricingCart;
