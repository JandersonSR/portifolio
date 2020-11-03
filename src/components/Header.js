import React, { Component } from 'react';
import { Layout, HeaderRow, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Main from './main';

class Head extends Component {
  render(){
  return (
    <header>
      
      <Layout className='header-inner'>  
     
      <HeaderRow title={<Link style={{ textDecoration: 'none', color: 'white', overflow: 'hidden', background:'#0f2633f5' }} to="/">
        <div className='logo'> 
          JR
      </div>
      </Link>}
       >
      
            <Navigation className="ul" > 
                <Link className="li" to="/resume">CURRICULO</Link>
                <Link className="li" to="/aboutme">ABOUT</Link>
                <Link className="li" to="/projects">PROJETOS</Link>
                <Link className="li" className='btn' to="/contact">CONTATO</Link>
            </Navigation>
            </HeaderRow>
        <Drawer className='menu' title={<Link style={{backgroundImage:('./menu.png'), width:'20px' ,textDecoration: 'none', color: '#FFFFFF'}} to="/">Home</Link>} 
        scroll style={{overflow: 'VISIBLE', color:'#FFFFFF', backgroundColor:'#0f2633f5'}}>
            <Navigation className='nav' >
              <Link to="/resume">CURRICULO</Link>
              <Link to="/aboutme">ABOUT</Link>
              <Link to="/projects">PROJETOS</Link>
              <Link to="/contact">CONTATO</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>

    </Layout>
    
  </header>
  );
}
}
export default Head;