import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import SalesForcast from './components/SalesForcast';

function App() {
  return (
    <div className="App">
      <div>
        <h1>OneGlass.io</h1>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Hamburg</Tab>
            <Tab>Munich</Tab>
          </TabList>

          <TabPanel>
            <SalesForcast city="Hamburg" />
          </TabPanel>

          <TabPanel>
            <SalesForcast city="Munich" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
