import { Spin } from 'antd';
import React from 'react';
import '../assets/loading.css';

const LoadingMovie = () => (
  <div className="movie-loading">
    <Spin />
  </div>
);
export default LoadingMovie;