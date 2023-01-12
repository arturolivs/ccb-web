import React, { useState } from 'react'

function usePagination<T>(data: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1)
    const maxPage = Math.ceil(data.length / itemsPerPage)

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(begin, end)
    }

    function next() {
        setCurrentPage((currentValue) => Math.min(currentValue + 1, maxPage))
    }

    function prev() {
        setCurrentPage((currentValue) => Math.max(currentValue - 1, 1))
    }

    function jump(page: number) {
        const pageNumber = Math.max(1, page)
        setCurrentPage((_) => Math.min(pageNumber, maxPage))
    }

    return { next, prev, jump, currentData, currentPage, maxPage }
}

export default usePagination
