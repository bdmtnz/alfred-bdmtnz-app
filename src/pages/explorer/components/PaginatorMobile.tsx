import type React from 'react';

interface PaginatorMobileProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginatorMobile: React.FC<PaginatorMobileProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 1) {
                pages.push(1, '...', totalPages);
            } else if (currentPage >= totalPages) {
                pages.push(1, '...', totalPages);
            } else {
                pages.push(1, currentPage, totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex space-x-2">
            <button
                type='button'
                onClick={handlePrevious}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                disabled={currentPage === 1}
            >
                &#60;
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    type='button'
                    key={`${page}-${index + 1}`}
                    onClick={() => typeof page === 'number' && handlePageClick(page)}
                    className={`px-4 py-2 rounded-md cursor-pointer ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                type='button'
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                disabled={currentPage === totalPages}
            >
                &#62;
            </button>
        </div>
    );
};

export default PaginatorMobile;