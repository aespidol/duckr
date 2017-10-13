import React from 'react'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

class MainContainer extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchUserSuccess: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  componentDidMount() {
    firebaseAuth().onAuthStateChanged((user)=>{
      if(user){
        const {displayName, photoURL, uid} = user.providerData[0]
        const userInfo = formatUserInfo(displayName, photoURL, uid)
        this.props.authUser(user.uid)
        this.props.fetchUserSuccess(user.uid, userInfo, Date.now())
        if(this.props.location.pathname === '/'){
          this.context.router.history.push("/feed")
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }
  
  render () {
    const { isAuthed } = this.props
    return this.props.isFetching === true
      ? null 
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed}/>
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

export default connect(({users}) => {
  return {
    isAuthed: users.isAuthed,
    isFetching: users.isFetching
  }
},(dispatch)=>{
  return bindActionCreators(userActionCreators, dispatch)
})(MainContainer)
