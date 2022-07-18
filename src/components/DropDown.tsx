import { Select } from '../styles/styles';
import {IOption} from './common';

interface IDDProps {
  options: IOption[],
  onSelect: (item:string) => void;
}

const DropDown = (props:IDDProps) => {
  const {options, onSelect} = props;

  return (     
    <Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelect(e.target.value)}>
        {options.map((item,index) => {return (<option key={index} value={item.value}>{item.label}</option>)})}
    </Select>
  );    
  
}

export default DropDown;