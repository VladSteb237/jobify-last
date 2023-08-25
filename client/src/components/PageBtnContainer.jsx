import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
    const { data: { currentPage, numOfPages } } = useAllJobsContext();
    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
    });

    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    console.log(search, pathname);

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
        //console.log(pageNumber);
    };
    const addPageButton = ({ pageNumber, activeClass }) => {
        return (
            <button
                className={`btn page-btn ${activeClass && 'active'}`}
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
        );
    };
    const renderPageButtons = () => {
        const pageButtons = [];

        // Add the first page button
        pageButtons
            .push(addPageButton({
                pageNumber: 1,
                activeClass: currentPage === 1
            }));
        // dots and spaces
        if (currentPage > 3) {
            pageButtons.push(
                <span className='page-btn dots' key='dots-1'>
                    ...
                </span>
            );
        }
        // one before page button
        if (currentPage !== 1 && currentPage !== 2) {
            pageButtons
                .push(addPageButton({
                    pageNumber: currentPage - 1,
                    activeClass: false,
                }));
        }
        // currentPage
        if (currentPage !== 1 && currentPage !== numOfPages) {
            pageButtons
                .push(addPageButton({
                    pageNumber: currentPage,
                    activeClass: true,
                }));
        }
        // after page button
        if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
            pageButtons
                .push(addPageButton({
                    pageNumber: currentPage + 1,
                    activeClass: false,
                }));
        }
        // dots and spaces
        if (currentPage < numOfPages - 2) {
            pageButtons.push(
                <span className='page-btn dots' key='dots+1'>
                    ...
                </span>
            );
        }
        // Add the last page button
        pageButtons
            .push(addPageButton({
                pageNumber: numOfPages,
                activeClass: currentPage === numOfPages
            }));

        return pageButtons;
    };

    return (
        <div>
            <Wrapper>
                <button
                    className='btn prev-btn'
                    onClick={() => {
                        let prevPage = currentPage - 1;
                        if (prevPage < 1) prevPage = numOfPages;
                        handlePageChange(prevPage);
                    }}
                >
                    <HiChevronDoubleLeft />
                    prev
                </button>
                <div className="btn-container">
                    {renderPageButtons()}
                </div>
                <button
                    className='btn next-btn'
                    onClick={() => {
                        let nextPage = currentPage + 1;
                        if (nextPage > numOfPages) nextPage = 1;
                        handlePageChange(nextPage);
                    }}
                >
                    next
                    <HiChevronDoubleRight />
                </button>
            </Wrapper>
        </div>
    );
};

export default PageBtnContainer;
