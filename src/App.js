
import './App.css';
import ReverseString from './components/ReverseString';
import FilterNumbers from './components/FilterNumbers';
import FormatName from './components/FormatName';
import ConditionalRender from './components/ConditionalRender';
import { Counter } from './Welly_InterviewTest';
function App() {
  return (
    <div className="container px-0 py-24 md:px-20 mx-auto flex flex-wrap gap-10 justify-center ">
      <div className='display_block'>
        <ReverseString />
      </div>
      <div className='display_block'>
        <FilterNumbers />
      </div>
      <div className='display_block'>
        <FormatName />
      </div>
      <div className='display_block'>
        <ConditionalRender />
      </div>
      <div className='display_block'>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
