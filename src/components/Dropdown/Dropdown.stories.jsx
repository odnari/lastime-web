import '../../index.css'
import Dropdown from './Dropdown'
import Button from '../Button'

export const DefaultDropdown = () => <Dropdown renderToggle={(onToggle) => <Button onClick={onToggle}>Toggle</Button>}>
  <Dropdown.Item onClick={() => console.log('1')}>
    First item
  </Dropdown.Item>
  <Dropdown.Item onClick={() => console.log('2')}>
    Second item
  </Dropdown.Item>
</Dropdown>;
