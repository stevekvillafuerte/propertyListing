import './FilterBar.css'
import { useState } from 'react'

function FilterBar({ data, setFilterData }) {
  const [filters, setFilters] = useState({
    search: '',
    locations: [],
    superhost: false,
    bedroom: 'all',
  })

  function applyFilters(updatedFilters) {
    const filtered = data.filter((item) => {
      const searchTerm = updatedFilters.search.trim().toLowerCase()
      const matchesSearch =
        searchTerm === '' ||
        item.title?.toLowerCase().includes(searchTerm) ||
        item.location?.toLowerCase().includes(searchTerm)
      const matchesSuperhost = !updatedFilters.superhost || item.superhost === true
      const matchesLocation =
        updatedFilters.locations.length === 0 ||
        updatedFilters.locations.includes(item.location?.toLowerCase())
      const matchesBedroom =
        updatedFilters.bedroom === 'all' ||
        item.capacity?.bedroom === Number(updatedFilters.bedroom)

      return matchesSearch && matchesSuperhost && matchesLocation && matchesBedroom
    })

    setFilterData(filtered)
  }

  function handleFilterChange(event) {
    const { name, value, type, checked } = event.target
    const updatedFilters = {
      ...filters,
      [name]: type === 'checkbox' ? checked : value,
    }

    setFilters(updatedFilters)
    applyFilters(updatedFilters)
  }

  function handleLocationChange(event) {
    const { value, checked } = event.target
    const locations = checked
      ? [...filters.locations, value]
      : filters.locations.filter((location) => location !== value)
    const updatedFilters = { ...filters, locations }

    setFilters(updatedFilters)
    applyFilters(updatedFilters)
  }



  return(
    <div className="filterbar">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          type="search"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search stays"
          aria-label="Search stays"
        />
      </label>

      <div className="locations">
        <label className="filter-pill">
          <input
            type="checkbox"
            checked={filters.locations.length === 0}
            onChange={() => {
              const updatedFilters = { ...filters, locations: [] }
              setFilters(updatedFilters)
              applyFilters(updatedFilters)
            }}
          />
          All Stays
        </label>
        <label className="filter-pill">
          <input type="checkbox" value="norway" checked={filters.locations.includes('norway')} onChange={handleLocationChange}/> Norway
        </label>
        <label className="filter-pill">
          <input type="checkbox" value="finland" checked={filters.locations.includes('finland')} onChange={handleLocationChange}/> Finland
        </label>
        <label className="filter-pill">
          <input type="checkbox" value="sweden" checked={filters.locations.includes('sweden')} onChange={handleLocationChange}/> Sweden
        </label>
        <label className="filter-pill">
          <input type="checkbox" value="switzerland" checked={filters.locations.includes('switzerland')} onChange={handleLocationChange}/> Switzerland
        </label>
      </div>

      <div className="controls-container">
       
        <label className="toggle-switch">
          <input type="checkbox" name="superhost" checked={filters.superhost} onChange={handleFilterChange}/>
          <span class="slider"></span>
          <span class="toggle-label">Superhost</span>
        </label>

     
        <div className="custom-select-wrapper">
          <select className="dropdown-input" name="bedroom" value={filters.bedroom} onChange={handleFilterChange}>
            <option value="all">Bedrooms</option>
            <option value="1">1 bedroom</option>
            <option value="2">2 bedrooms</option>
          </select>
          <span class="arrow">▼</span>
        </div>
      </div>
    </div>
  )
}
export default FilterBar