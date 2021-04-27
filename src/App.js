import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MenuNavigation from './components/MenuNavigation';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import './static/css/Sidebar.css';
import servicesData from './data/servicesData.json'

const { Content, Footer } = Layout;
export const ServicesContext = React.createContext()

function App() {
  const data = servicesData;
  const ServicesProvider = ServicesContext.Provider
  console.log(data);

  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <Navbar />
          <Layout className="site-layout">
            <ServicesProvider value={data}>
              <MenuNavigation />
              <Content
                style={{
                  margin: '80px 10px',
                  overflow: 'scroll',
                  padding: '0 50px',
                  marginTop: 64
                }}>
                <AppRoutes />
              </Content>
            </ServicesProvider>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Copyright Engineering Services</Footer>
        </Layout>
      </div >
    </Router>
  );
}

export default App;
