import './FilterBar.css'
function FilterBar(){
  return(
    <div className="filterbar">

      <div className="locations">
        <label class="filter-pill">
          <input type="checkbox" name="country" value="all"/> All Stays
        </label>
        <label class="filter-pill">
          <input type="checkbox" name="country" value="norway"/> Norway
        </label>
        <label class="filter-pill">
          <input type="checkbox" name="country" value="finland"/> Finland
        </label>
        <label class="filter-pill">
          <input type="checkbox" name="country" value="sweden"/> Sweden
        </label>
        <label class="filter-pill">
          <input type="checkbox" name="country" value="switzerland"/> Switzerland
        </label>
      </div>

      <div class="controls-container">
       
        <label class="toggle-switch">
          <input type="checkbox"/>
          <span class="slider"></span>
          <span class="toggle-label">Superhost</span>
        </label>

     
        <div class="custom-select-wrapper">
          <select class="dropdown-input">
            <option value="all" selected>Property type</option>
            <option value="1">Property type 1</option>
            <option value="2">Property type 2</option>
          </select>
          <span class="arrow">▼</span>
        </div>
      </div>
    </div>
  )
}
export default FilterBar