import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './blog.css';

const Blog = () => {


    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 3;

    useEffect(() => {
        const fetchBlogs = async (page = 1) => {
            const response = await axios.get(`/api/blogs?page=${page}&limit=${blogsPerPage}`);
            setBlogs(response.data.blogs);
            setPageCount(Math.ceil(response.data.total / blogsPerPage));
        };
        fetchBlogs(currentPage + 1);
    }, [currentPage]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className="blog-container">
            <div className="container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-post">
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <a href={`/blog/${blog.id}`}>To'liq ma'lumot</a>
                    </div>
                ))}
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
};

export default Blog;
