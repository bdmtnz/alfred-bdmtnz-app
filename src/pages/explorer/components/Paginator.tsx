import type React from 'react';

interface PaginatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
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

    return (
        <div className="flex space-x-2">
            <button
                type='button'
                onClick={handlePrevious}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        type='button'
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`px-4 py-2 rounded-md cursor-pointer ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                type='button'
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginator;