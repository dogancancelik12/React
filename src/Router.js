import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AddFreelancer } from './pages/AddFreelancer';
import { FreelancersList } from './components/freelancer/freelancersList';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const AppRouter = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu mode="horizontal" theme="dark" style={{ float: 'right' }}>
            <Menu.Item>
              <Link to="/freelancer/create">Add Freelancer</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/freelancers">Freelancers</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/account">Account</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Switch>
          <Route exact path="/">
            <Redirect to="/freelancers" />
          </Route>
          <Route path="/account">
            <p>account</p>
          </Route>
          <Route path="/freelancers">
            <FreelancersList />
          </Route>
          <Route path="/freelancer/create">
            <AddFreelancer />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
