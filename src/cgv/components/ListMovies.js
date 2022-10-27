import React from 'react';
import { Row, Col, Card } from 'antd';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ListMovies = ({movies}) => {
    return (
        <Row style={{ margin: '30px 0px' }}>
            {movies.map((item,index) => (
                <Col span={6} key={index}>
                    <Link to={`/movie/${slugify(item.title)}-${item.id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 280,
                                marginBottom: '20px'
                            }}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}
ListMovies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default React.memo(ListMovies);