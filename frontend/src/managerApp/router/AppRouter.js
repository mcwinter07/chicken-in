import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// Logo
import Logo from '../../img/logo/chicken-in-logo.png'

// Pages
import { ReportPage } from '../reportPage/ReportPage/ReportPage'
import { ApprovePage } from '../approvePage/ApprovePage/ApprovePage'
import { ManageEmployeesPage } from '../manageEmployeesPage/ManageEmployeesPage/ManageEmployeesPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

// Grid
import { Maingrid } from './Maingrid/Maingrid'

const AppRouter = () => (

  <BrowserRouter>
    <div className="maingrid">

      <div className="nav">
        <div className="logo">
          <img src={Logo}/>
        </div>
        <br/>
        <h1>Employee</h1>
        <br/>
        <p><Link to="/">Report Page</Link></p>
        <p><Link to="/approve">Approve Page</Link></p>
        <p><Link to="/manage">Manage Employees Page</Link></p>
        <p><Link to="/settings">Settings</Link></p>
      </div>

      <div className="pagecontent">

        <div className="usericon">
          U
        </div>

        <Switch>
          <Route exact path="/" component={ReportPage} />
          <Route path="/approve" component={ApprovePage}/>
          <Route path="/manage" component={ManageEmployeesPage}/>
          <Route path="/settings" component={SettingsPage}/>
        </Switch>
      </div>

    </div>
  </BrowserRouter>
)

export { AppRouter }