import { Divider, Input } from 'antd';

function SearchBar({ search, setSearch }) {
  function handleChange(event) {
    //event.target.value => corresponde à tecla pressionada
    // console.log(event.target.value);
    setSearch(event.target.value);
  }
  return (
    <div className="div-pai">
      <div className="search-bar">
        <Divider>Search Bar</Divider>
        <label>Search</label>
        <Input type="text" value={search} onChange={handleChange} />
      </div>
    </div>
  );
}

export default SearchBar;
