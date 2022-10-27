import React from 'react';
import { Pagination } from 'antd';

const PaginationMovies = (props) => {
    return (
        <Pagination
            current={props.currentPage}
            total={props.total}
            pageSize={20}
            showSizeChanger={false}
            onChange={page => props.changePage(page)}
        />
    )
}
export default React.memo(PaginationMovies);