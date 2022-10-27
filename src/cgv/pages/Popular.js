import React, { useState, useEffect } from 'react';
import LayoutMovie from '../components/layouts/Layout';
import ListMovies from '../components/ListMovies';
import PaginationMovies from '../components/Pagiantion';
import { Row, Col, Skeleton } from 'antd';
import { api } from '../services/api';

const PopularPage = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [dataMovies, setDataMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [clickPage, setClickPage] = useState(false);

    useEffect(() => {
        // call data Movies
        const getDataFromApi = async () => {
            const movies = await api.getDataMoviePopular(page);
            if(movies.hasOwnProperty('results')){
                // cap nhat lai state: dataMovies
                setDataMovies(movies.results);
            }
            if(page === 1 && clickPage === false){
                // call api lan dau tien thi moi cap nhat state totalPage va totalResults
                if(movies.hasOwnProperty('total_pages')){
                    setTotalPage(movies.total_pages)
                }
                if(movies.hasOwnProperty('total_results')){
                    setTotalResults(movies.total_results)
                }
            }
            // cap nhat lai state: loading (ket thuc viec lay data tu api)
            setLoading(false);
        }
        getDataFromApi();
    }, [page]);

    const panigate = (p) => {
        // p : trang gui len can lay du lieu (so trang ma nguoi dung click vao)
        if(p >=1 && p <= totalPage){
            // cap nhat lai state page
            setPage(p)
            // cap nhat state de biet nguoi dung da bam phan trang
            setClickPage(true);
        }
    }

    if(loading){
        return <Skeleton active />
    }
    if(dataMovies.length === 0 && !loading){
        <Row>
            <Col span={20} offset={2}>
                <h5>Khong co du lieu</h5>
            </Col>
        </Row>
    }

    return (
        <LayoutMovie
            app="Home"
            title="List"
            name="Popular"
        >
            <Row>
                <Col span={24}>
                    <ListMovies
                        movies={dataMovies}
                    />
                    {dataMovies.length !== 0 && (
                        <Row style={{ margin: '30px 0px', textAlign: 'center' }}>
                            <Col span={24}>
                                <PaginationMovies
                                    currentPage={page}
                                    total={totalResults}
                                    changePage={panigate}
                                />
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(PopularPage);