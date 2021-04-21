/*
 * @Description: 
 * @Date: 2021-04-20 10:47:31
 * @Author: LDZ <dongzhi.liu@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import { Link, Route, HashRouter  } from 'react-router-dom';
import { Layout } from 'antd';

import Home from './components/home';
import Knowledge from './components/knowledge';

const { Content } = Layout;

function App() {
  return (
    <HashRouter>
      <div className="page" id="page">
        <Layout>
          <div className="header" id="header">
            <div className="brand">
              <Link to="/">首页</Link>
              <Link to="/Knowledge">知识中心</Link>
            </div>
          </div>

          <Content className="content" id="content">
            <Route path="/" exact component={ Home }/>
            <Route path="/Knowledge" component={ Knowledge }/>
          </Content>
        </Layout>
      </div>      
    </HashRouter>

  );
}

export default App;
