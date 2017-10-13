import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Logout } from 'components'
import { connect } from 'react-redux'
import { logoutAndUnauth } from 'redux/modules/users'
class LogoutContainer extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired
    }
    componentDidMount () {
      this.props.dispatch(logoutAndUnauth())
    }
    render () {
      return (
        <div>
          <Logout />
        </div>
      )
    }
}

export default connect()(LogoutContainer)
