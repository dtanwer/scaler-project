import Dropdown from 'react-bootstrap/Dropdown';

function Filter() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A</Dropdown.Item>
        <Dropdown.Item href="#/action-2">B</Dropdown.Item>
        <Dropdown.Item href="#/action-3">C</Dropdown.Item>
      </Dropdown.Menu>

      
    </Dropdown>
  );
}

export default Filter;