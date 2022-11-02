import React, { useState } from 'react';
import LayoutMovie from '../components/layouts/Layout';
import { Row, Col, Input, Skeleton } from 'antd';
import { api } from '../services/api';
import ListMovies from '../components/ListMovies';
import PaginationMovies from '../components/Pagiantion';

const { Search } = Input;

const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [clickPage, setClickPage] = useState(false);
    const [nameMovie, setNameMovie] = useState('');

    const searchMovies = async (keyword, p = 1) => {
        if(keyword.length > 0){
            // loading
            setLoading(true); // bat dau call api
            const search = await api.searchMoviesByName(keyword, p);
            if(search.hasOwnProperty('results')){
                setDataSearch(search.results);
            }
            if(keyword !== nameMovie){
                setNameMovie(keyword);
            }
            if(page === 1 && clickPage === false){
                // call api lan dau tien thi moi cap nhat state totalPage va totalResults
                if(search.hasOwnProperty('total_pages')){
                    setTotalPage(search.total_pages)
                }
                if(search.hasOwnProperty('total_results')){
                    setTotalResults(search.total_results)
                }
            }
            // dung call api
            setLoading(false);
        }
    }

    const panigate = p => {
        if(p >= 1 && p <= totalPage){
            setPage(p);
            setClickPage(true);
            searchMovies(nameMovie, p);
        }
    }

    // bam search - doi call data
    if(loading){
        return (
            <LayoutMovie
                app="Home"
                title="Movie"
                name="Search"
            >
                <Skeleton active />
            </LayoutMovie>
        )
    }

    return (
        <LayoutMovie
            app="Home"
            title="Movie"
            name="Search"
        >
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="name movies ..."
                        enterButton
                        onSearch={key => searchMovies(key, 1)}
                        defaultValue={nameMovie}
                        allowClear
                    />
                </Col>
            </Row>
            <Row style={{magin: '30px 0px'}}>
                <Col span={24}>
                    {dataSearch.length == 0 ? (
                        <p>Chua co du lieu tim kiem</p>
                    ) : (
                        <>
                            <ListMovies
                                movies={dataSearch}
                            />
                            <PaginationMovies
                                currentPage={page}
                                total={totalResults}
                                changePage={panigate}
                            />
                        </>
                    )}
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(SearchPage);