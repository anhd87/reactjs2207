import React, { useState, useEffect } from 'react';
import LayoutMovie from '../components/layouts/Layout';
import { Row, Col, Skeleton, Image, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { heplers } from '../helpers/common';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const DetailMovie = () => {
    // useParams : hooks cua react-router-dom giup lay dc gia tri cac tham so tren router
    // tham so truyen lan router - cu phap [:param]
    const {slug, id} = useParams();
    // lay dc id cua bo phim - call api de lay thong tin chi tiet cua bo phim thong qua id cua no
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState({});
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const getData = async () => {
            // call api
            const detail = await api.getDataMovieById(id);
            if(!heplers.isEmpty(detail)){
                setDetailMovie(detail)
            }
            setLoading(false); //ket thuc call api
        }
        getData();
    }, [id]);

    if(loading){
        return (
            <LayoutMovie
                app="Home"
                title="Movie"
                name={slug}
            >
                <Skeleton active />
            </LayoutMovie>
        )
    }

    if(heplers.isEmpty(detailMovie) && !loading){
        return (
            <LayoutMovie
                app="Home"
                title="Movie"
                name={slug}
            >
                <h3>Khong co thong tin ve bo phim</h3>
            </LayoutMovie>
        )
    }
    let idTrailerVideo = null;
    if(detailMovie.hasOwnProperty('videos')){
        if(detailMovie.videos.hasOwnProperty('results')){
            idTrailerVideo = detailMovie.videos.results[0]['key'];
        }
    }
    return (
        <LayoutMovie
            app="Home"
            title="Movie"
            name={slug}
        >
            <Row>
                <Col span={8}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
                    />
                    <p>{detailMovie.original_title}</p>
                </Col>
                <Col span={16}>
                    <h1>{detailMovie.title}</h1>
                    <p>{detailMovie.overview}</p>
                    <ModalVideo
                        channel='youtube'
                        autoplay={true}
                        isOpen={isOpen}
                        videoId={idTrailerVideo}
                        onClose={() => setOpen(false)}
                    />
                    <Button
                        type='primary'
                        onClick={()=> setOpen(true)}
                    >View trailer</Button>
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(DetailMovie);