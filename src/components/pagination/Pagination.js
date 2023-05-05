import React, { useState } from 'react'
import styles from './Pagination.module.scss'

const Pagination = ({currentPage, setCurrentPage, productsPerPage, totalProducts}) => {

  const pageNumbers = []
  const totalPages = totalProducts / productsPerPage;
  // Limits pages shown
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //Go to next page
  const paginateNext = () => {

  }

  //Go to prev page

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
    pageNumbers.push(i)
  }

  return (
    <ul className={styles.pagination}>
      <li>Prev</li>
      
      {pageNumbers.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return(
            <li key={number} onClick={() => paginate(number)} className={currentPage === number ? `${styles.active}` : null}>
              {number}
            </li>
          )
        }


      })}
      
      <li>Next</li>
      <p>
        <b className={styles.page}>
          {`page ${currentPage}`}
        </b>
        <span>{` of `}</span>
        <b>{`${Math.ceil(totalPages)}`}</b>
      </p>
    </ul>
  )
}

export default Pagination