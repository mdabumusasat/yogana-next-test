"use client";
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [price, setPrice] = useState([0, 1000]); 

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Price Range: ${price[0]} - ${price[1]}`);
  };

  return (
    <div className="range-slider-one">
        <Slider
          range
          min={0}
          max={2000}
          value={price}
          onChange={handlePriceChange}
          allowCross={false}
        />
    </div>
  );
};

export default PriceFilter;
