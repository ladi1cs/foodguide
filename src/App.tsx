import React from 'react';
import {Legend, Fieldset, Label, Container, TitleBar, Button, GridContainer, Row, ToolBar} from './styles/styles';
import {IOption, GenderOptions} from './components/common';
import DropDown from './components/DropDown';
import RadioButtons from './components/RadioButtons';
import MenuCard from './components/MenuCard';
import {getData} from './data/data';
import {Colors, TableName} from './constants/common';

enum MenuType {User='user', Family='family'};

const MenuOptions: IOption[] = [
  {label: "User", value: MenuType.User},
  {label: "Family", value: MenuType.Family},
];

function App() {
  const [servingsPerDay, setServingsPerDay] = React.useState<any[]>([]);
  const [foodgroups, setFoodgroups] = React.useState<any[]>([]);
  const [foods, setFoods] = React.useState<any[]>([]);
  const [directStatements, setDirectStatements] = React.useState<any[]>([]);
  const [ageOptions, setAgeOptions] = React.useState<IOption[]>([]);
  const [name, setName] = React.useState<string>();
  const [age, setAge] = React.useState<string>();
  const [gender, setGender] = React.useState<string>();
  const [menus, setMenus] = React.useState<any[]>([]);
  const [isFamilyMenu, setIsFamilyMenu] = React.useState(false);

  React.useEffect(() => {   
    getData(TableName.ServingsPerDay).then((data) => setServingsPerDay(data));
    getData(TableName.Foodgroups).then((data) => setFoodgroups(data));
    getData(TableName.Foods).then((data) => setFoods(data));
    getData(TableName.DirectionalStatements).then((data) => setDirectStatements(data));
  },[]);

  React.useEffect(() => {
    setAgesDropDown();
  },[servingsPerDay]);

  const onReset = () => {
    setMenus([]);
  }
  
  const onApply = () => {
    const items = servingsPerDay.filter(spd => spd.gender === gender && spd.ages === age);
    const newMenu = {name, items};
    console.log({newMenu})
    setMenus([...menus, newMenu]);
  }

  const setAgesDropDown = () => {
    if (!servingsPerDay || servingsPerDay.length < 1) {
      return;
    }
    const agesList = servingsPerDay.map(spd => spd.ages);
    const uniqueArr = Array.from(new Set(agesList));
    const options = uniqueArr.map(opt => {return {label: opt, value: opt}});
    setAgeOptions(options);
  }

  const showApply: boolean = isFamilyMenu || (!isFamilyMenu && menus.length < 1);

  return (
    <Container>
      <TitleBar>
        <Label size={22} bold={true} color={Colors.White}>Food Guide</Label>
      </TitleBar>
      <ToolBar>
        <Row>
          <RadioButtons 
            options={MenuOptions} 
            title='Select Menu Type' 
            onChange={(opt)=> setIsFamilyMenu(opt === MenuType.Family)}
          /> 
          <Fieldset>
            <Legend>Enter name</Legend>
            <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
          </Fieldset>
          <Fieldset>
            <Legend>Select Age</Legend>
            <DropDown options={ageOptions} onSelect={(opt)=> setAge(opt)}></DropDown>
          </Fieldset>
          <Fieldset>
            <Legend>Select Gender</Legend>
            <DropDown options={GenderOptions} onSelect={(opt)=> setGender(opt)}></DropDown>
          </Fieldset>          
          {showApply &&  <Button color={Colors.Green} onClick={()=> onApply()}>Apply</Button>}
          <Button color={Colors.Red} onClick={()=> onReset()}>Reset</Button>
        </Row>
      </ToolBar>
      <GridContainer>
        {menus.map((mn, ind) => <MenuCard key={ind} data={mn}/>)}
      </GridContainer>
    </Container>
  );
}

export default App;
