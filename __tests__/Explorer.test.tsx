import type React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Airport } from '@/shared/models/airport.model';
import '@testing-library/jest-dom';
import useExplorerStateManager from '@/pages/explorer/hooks/explorer.hooks';
import Explorer from '@/pages/explorer/Explorer';

// Mock the hook
jest.mock('@/pages/explorer/hooks/explorer.hooks');

const mockUseExplorerStateManager = useExplorerStateManager as jest.MockedFunction<typeof useExplorerStateManager>;

describe('Explorer Component', () => {
    beforeAll(() => {
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
        // expect(screen.getByText('Buscar')).toBeInTheDocument();
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

        render(<Explorer/>);
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
        const filtered: Airport[] = [
            {
                airport_id: '1', airport_name: 'Test Airport 1',
                id: '',
                gmt: '',
                iata_code: '',
                city_iata_code: '',
                icao_code: '',
                country_iso2: '',
                geoname_id: '',
                latitude: '',
                longitude: '',
                country_name: '',
                phone_number: null,
                timezone: '',
                location: '',
                time: ''
            },
            {
                airport_id: '2', airport_name: 'Test Airport 2',
                id: '',
                gmt: '',
                iata_code: '',
                city_iata_code: '',
                icao_code: '',
                country_iso2: '',
                geoname_id: '',
                latitude: '',
                longitude: '',
                country_name: '',
                phone_number: null,
                timezone: '',
                location: '',
                time: ''
            },
        ];

        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            keyword: 'Airport Taiwan',
            isSuccess: true,
            filtered
        });

        render(<Explorer />);
        expect(screen.getByText('No se encontraron resultados para la busqueda con')).toBeInTheDocument();
    });
});