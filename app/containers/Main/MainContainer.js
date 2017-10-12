import React from 'react'
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MainContainer extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
  }
  render () {
    const { isAuthed } = this.props
    return (
      <div className={container}>
        <Navigation isAuthed={isAuthed}/>
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    isAuthed: state.isAuthed
  }
})(MainContainer)
