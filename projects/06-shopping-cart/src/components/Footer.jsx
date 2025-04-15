import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {

    const { filters } = useFilters()

    return (
        <footer className='footer'>
            <span>
                {JSON.stringify(filters)}
            </span>
            <h4>React Tecnhical Chall</h4>
            <span>@slincem</span>
        </footer>
    )
}