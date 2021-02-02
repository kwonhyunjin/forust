import Icon from '@/components/icon/icon';
import Select from '@/components/select/select';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

const maxPageSize = 5;

export default function Pagination({
  children, className, page: currentPage, onChange, totalLen, perPage: currentPerPage, ...rest
}) {
  const totalPage = Math.ceil(totalLen / currentPerPage);

  let startPage = 0;
  let endPage = 0;

  if (totalPage <= maxPageSize) {
    startPage = 1;
    endPage = totalPage;
  } else if (currentPage <= 3) {
    startPage = 1;
    endPage = maxPageSize;
  } else if (currentPage + 2 >= totalPage) {
    startPage = totalPage - 4;
    endPage = totalPage;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  const pageNumbers = useMemo(() => (
    [...Array((endPage + 1) - startPage).keys()].map((i) => startPage + i)
  ), [startPage, endPage]);

  const indexOfFirstPerPage = (currentPage - 1) * currentPerPage;

  const handlePerPageSelectChange = useCallback(async (e) => {
    const value = Number(e.target.value);
    onChange(Math.floor((indexOfFirstPerPage / value) + 1), value);
  }, [onChange, indexOfFirstPerPage]);

  const createPageButtonClickHandler = useCallback((page) => (e) => {
    e.preventDefault();
    onChange(page, currentPerPage);
  }, [onChange, currentPerPage]);

  return (
    <div {...rest} className={classNames('pagination', className)}>
      <ul className="pagination__list">
        <li className="pagination__item">
          <a
            href="#"
            className={currentPage === 1 ? 'pagination__icon is-disabled' : 'pagination__icon'}
            onClick={createPageButtonClickHandler(currentPage - 1)}
            aria-label="Previous page"
            title="Previous page"
            tabIndex={currentPage === 1 ? -1 : null}
          >
            <Icon type="caret-left" />
          </a>
        </li>
        {pageNumbers.map((pageNum) => (
          <li className={currentPage === pageNum ? 'pagination__item is-active' : 'pagination__item'} key={pageNum}>
            <a
              href="#"
              className="pagination__item-number"
              onClick={createPageButtonClickHandler(pageNum)}
              aria-label={`Page ${pageNum}`}
            >
              {pageNum}
            </a>
          </li>
        ))}
        <li className="pagination__item">
          <a
            href="#"
            className={currentPage === totalPage ? 'pagination__icon is-disabled' : 'pagination__icon'}
            onClick={createPageButtonClickHandler(currentPage + 1)}
            aria-label="Next page"
            title="Next page"
            tabIndex={currentPage === totalPage ? -1 : null}
          >
            <Icon type="caret-right" />
          </a>
        </li>
      </ul>
      <Select
        className="pagination__per-page"
        size="small"
        value={currentPerPage}
        onChange={handlePerPageSelectChange}
        aria-label="Number of items per page"
      >
        <Select.Option value={5}>5</Select.Option>
        <Select.Option value={10}>10</Select.Option>
        <Select.Option value={20}>20</Select.Option>
      </Select>
      <span className="pagination__per-page-label" aria-hidden="true">per page</span>
    </div>
  );
}

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  page: PropTypes.number,
  onChange: PropTypes.func,
  totalLen: PropTypes.number,
  perPage: PropTypes.number,
};
