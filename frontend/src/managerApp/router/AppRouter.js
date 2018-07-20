import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// Pages
import { ReportPage } from '../reportPage/ReportPage/ReportPage'
import { ApprovePage } from '../approvePage/ApprovePage/ApprovePage'
import { ManageEmployeesPage } from '../manageEmployeesPage/ManageEmployeesPage/ManageEmployeesPage'
import { SettingsPage } from '../settingsPage/SettingsPage/SettingsPage'

// Components
import { Nav } from './Nav/Nav'

class AppRouter extends React.Component {
  state = {
    navState: false
  }

  toggleNav = (event) => {
    event.preventDefault()
    console.log('!!!')
    if (this.state.navState === false) {
      this.setState(() => {
        return {
          navState: true
        }
      })
    } else {
      this.setState(() => {
        return {
          navState: false
        }
      })
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="maingrid">

          <div className="pagecontent">
            <Switch>
              <Route exact path="/" component={ReportPage} />
              <Route path="/approve" component={ApprovePage}/>
              <Route path="/manage" component={ManageEmployeesPage}/>
              <Route path="/settings" component={SettingsPage}/>
            </Switch>
          </div>

          <Nav>
            <Link className="nav-element" to="/"><h1>Reports</h1></Link>
            <Link className="nav-element" to="/approve"><h1>Approve Shifts</h1></Link>
            <Link className="nav-element" to="/manage"><h1>Manage Team</h1></Link>
            <Link className="nav-element" to="/settings"><h1>Business Settings</h1></Link>
            <div className="nav-element"><a href="#logout" className="nav-link" onClick={this.logout}><h1>Logout</h1></a></div>
          </Nav>

        </div>
      </BrowserRouter>
    )
  }
}

export { AppRouter }
