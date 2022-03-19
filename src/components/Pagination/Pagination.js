import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ info, pageNumber, updatePageNumber }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  let pageChange = data => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <style jsx>
        {`
          a {
            color: #fff;
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }

            .next,
            .prev {
              display: none;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        forcepage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
}
