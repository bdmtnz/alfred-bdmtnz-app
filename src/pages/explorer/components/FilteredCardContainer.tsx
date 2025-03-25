import type { Airport } from "@/shared/models/airport.model";
import Card from "./Card";

interface FilteredCardContainerProps {
    items: Airport[];
}

const FilteredCardContainer: React.FC<FilteredCardContainerProps> = ({ items }) => {
    return (
        <div className={`grid grid-cols-1 gap-4 sm:gap-6 ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {items.map((airport) => (
                <Card key={airport.airport_id} airport={airport} />
            ))}
        </div>
    );
};

export default FilteredCardContainer;