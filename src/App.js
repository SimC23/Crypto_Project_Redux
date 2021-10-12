import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Homepage} from './components'

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
            <div className='routes'>
              <Route exact path='/'>
                  <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                  <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                  <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                  <News />
              </Route>
            </div>
        </Layout>
      <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2021
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
