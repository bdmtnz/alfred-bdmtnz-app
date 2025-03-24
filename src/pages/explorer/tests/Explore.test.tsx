import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Explorer from '../Explorer';
import useExplorerStateManager from '../hooks/explorer.hooks';

// Mock the hook
jest.mock('./hooks/explorer.hooks');

const mockUseExplorerStateManager = useExplorerStateManager as jest.MockedFunction<typeof useExplorerStateManager>;

describe('Explorer Component', () => {
    beforeEach(() => {
        mockUseExplorerStateManager.mockReturnValue({
            keyword: '',
            filtered: [],
            totalPages: 1,
            isSuccess: false,
            isLoading: false,
            isError: false,
            currentPage: 1,
            handlePageChange: jest.fn(),
            handleKeywordChange: jest.fn(),
            handleSearchClick: jest.fn(),
        });
    });

    test('renders the Explorer component', () => {
        render(<Explorer />);
        expect(screen.getByText('SkyConnect Explorer')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Buscar aeropuertos...')).toBeInTheDocument();
        expect(screen.getByText('Buscar')).toBeInTheDocument();
    });

    test('calls handleSearchClick on search button click', () => {
        const handleSearchClick = jest.fn();
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            handleSearchClick,
        });

        render(<Explorer />);
        fireEvent.click(screen.getByText('Buscar'));
        expect(handleSearchClick).toHaveBeenCalled();
    });

    test('displays loading state', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isLoading: true,
        });

        render(<Explorer />);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    test('displays error state', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isError: true,
        });

        render(<Explorer />);
        expect(screen.getByText('Límite de peticiones gratis alcanzada')).toBeInTheDocument();
    });

    test('displays no results message', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isSuccess: true,
            filtered: [],
            keyword: 'test',
        });

        render(<Explorer />);
        expect(screen.getByText('No se encontraron resultados para la busqueda con test')).toBeInTheDocument();
    });

    test('displays filtered results', () => {
        const filtered = [
            { airport_id: '1', airport_name: 'Test Airport 1' },
            { airport_id: '2', airport_name: 'Test Airport 2' },
        ];

        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isSuccess: true,
            filtered,
        });

        render(<Explorer />);
        expect(screen.getByText('Test Airport 1')).toBeInTheDocument();
        expect(screen.getByText('Test Airport 2')).toBeInTheDocument();
    });
});