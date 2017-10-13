import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string.isRequired,
      fetchAndHandleAuthUser: PropTypes.func.isRequired
    }
    static contextTypes = {
      router: PropTypes.object.isRequired
    }
    handleAuth (e) {
      e.preventDefault()
      this.props.fetchAndHandleAuthUser()
        .then(() => {
          // this.context.router.history.push("/feed")
        })
    }
    render () {
      const { error, isFetching } = this.props
      return (
        <Authenticate
          isFetching = {isFetching}
          error={error}
          onAuth={this.handleAuth.bind(this)}
        />
      )
    }
}

function mapStateToProps ({users}) {
  return {
    isFetching: users.isFetching,
    error: users.error
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
