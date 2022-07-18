import {Label, GridItem, Frame,} from '../styles/styles';
import {Colors} from '../constants/common';

interface IMCProps {
  data: any;
}

const MenuCard = (props:IMCProps) => {
  const {data} = props;

  return (     
    <GridItem width='1200px'>
      <Frame >
        <Label size={16} bold={true} color={Colors.Blue}>{`Daily Menu for ${data.name}`}</Label>
      </Frame>
      <div>
        {data.items.map((i: any) => 
        <div>
        <Label size={16} color={Colors.Blue}>{`fgid: ${i.fgid}, servings: ${i.servings}`}</Label>
        </div>)}
      </div>
    </GridItem>
  );    
  
}

export default MenuCard;