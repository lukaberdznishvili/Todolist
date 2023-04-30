import './App.css';
import Component_todo from './first_component_on_firstpage';
import Text_keep_track from './second_component_on_page_one';
import { useState } from 'react';
import image1 from './components/iamge1.svg';
import { TodoWrapper } from './todolisttt/ToDoWrapper';


function App() {

const[showComponent, setshowComponent] = useState(true);
const[showComponent1, setshowComponent1] = useState(true);
const[showComponent2, setshowComponent2] = useState(true);
const[showComponent3, setshowComponent3] = useState(false);
const[showComponent4, setshowComponent4] = useState(false);
const[showComponent5, setshowComponent5] = useState(false);




const handllebuttonclick = ()=>{
  
  setshowComponent(false);
  setshowComponent1(false);
  setshowComponent2(false);
  setshowComponent3(true);  
};


const handllebuttonclicksecond = () =>{
  setshowComponent3(false)
  setshowComponent4(true)
  setshowComponent5(true)
}
  return (
    <div className="App">   
    {showComponent && <Component_todo  />}
    {showComponent1 && <Text_keep_track />}
    {showComponent2 && <Button_for_page_one handleClick={handllebuttonclick} />}
    {showComponent3 &&  <Second_page handleClick={handllebuttonclicksecond} />}
    {showComponent4 && <Nav />}
    
    {showComponent5 && <TodoWrapper />}
    
    </div>
  );
}
 


function Button_for_page_one(props){
return(
      <div className="button_one_div">
          <button onClick = {props.handleClick} className="button_on_first_page">Get started</button>
      </div>
  )
};

function Second_page(props){


  return(
    <div className='setshowcomponent4div'>
      <h1 className='component4_text1'>Get Started</h1>
      <h1 className='component4_text2'>add photo</h1>
      
      <input type={'image'}  src={image1}  className='component4_input'/>
      
      <h1 className='component4_text3'>fill in your name</h1>

      <input type={'text'} placeholder='your name' className='component4_input2'/><br></br>
      <button onClick={props.handleClick} className='button_on_second_page'>Sign In</button>
    </div>
    
  )
}
function Nav(){
  return(
      <div className="Nav_div_1">
          <h1 className="To_do">TO DO</h1>
      </div>
  )
}


export default App;
