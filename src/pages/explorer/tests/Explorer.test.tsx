import type React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Airport } from '@/shared/models/airport.model';
import '@testing-library/jest-dom';
import useExplorerStateManager from '@/pages/explorer/hooks/explorer.hooks';
import Explorer from '@/pages/explorer/Explorer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memoryRouter } from 'next-router-mock'; // Importa la función para crear un enrutador simulado
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

// Mock the hook
jest.mock('@/pages/explorer/hooks/explorer.hooks');
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

const mockUseExplorerStateManager = useExplorerStateManager as jest.MockedFunction<typeof useExplorerStateManager>;

const queryClient = new QueryClient();

const renderWithProviders = (ui: React.ReactElement) => {
    return render(
        <RouterContext.Provider value={memoryRouter}>
            <QueryClientProvider client={queryClient}>
                {ui}
            </QueryClientProvider>
        </RouterContext.Provider>
    );
};

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
        renderWithProviders(<Explorer />);
        expect(screen.getByText('SkyConnect Explorer')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Buscar aeropuertos...')).toBeInTheDocument();
        fireEvent.click(screen.getByTitle('own-button'));
    });

    test('calls handleSearchClick on search button click', () => {
        const handleSearchClick = jest.fn();
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            handleSearchClick,
        });

        renderWithProviders(<Explorer />);
        fireEvent.click(screen.getByTitle('own-button'));
        expect(handleSearchClick).toHaveBeenCalled();
    });

    test('displays loading state', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isLoading: true,
        });

        renderWithProviders(<Explorer />);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    test('displays error state', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isError: true,
        });

        renderWithProviders(<Explorer />);
        expect(screen.getByText('Límite de peticiones gratis alcanzada')).toBeInTheDocument();
    });

    test('displays no results message', () => {
        mockUseExplorerStateManager.mockReturnValueOnce({
            ...mockUseExplorerStateManager(),
            isSuccess: true,
            filtered: [],
            keyword: 'test',
        });

        renderWithProviders(<Explorer />);
        expect(screen.getByText('No se encontraron resultados para la búsqueda con test')).toBeInTheDocument();
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
            keyword: '',
            isSuccess: true,
            filtered
        });

        renderWithProviders(<Explorer />);
        expect(screen.getByText('Test Airport 1')).toBeInTheDocument();
        expect(screen.getByText('Test Airport 2')).toBeInTheDocument();
    });
});