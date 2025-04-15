import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => (
            {
                ...prevState,
                category: event.target.value
            }))
    }


    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Minimum Price</label>
                <input type='range' id={minPriceFilterId} min='0' max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='groceries'>Groceries</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                </select>
            </div>
        </section>
    )
}