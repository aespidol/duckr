import React from 'react'
import PropTypes from 'prop-types'
import { newDuckContainer, header } from './styles.css'
import { errorMsg } from 'sharedStyles/styles.css'
import { DuckContainer } from 'containers'

const { array, string, bool, func } = PropTypes
const NewDucksAvailable = ({handleClick}) => {
  return (
    <div className={newDuckContainer} onClick={handleClick}>
      New Ducks Available
    </div>
  )
}

NewDucksAvailable.propTypes = {
  handleClick: func.isRequired
}

const Feed = props => {
  return props.isFetching === true
    ? <h1 className={header}>Fetching</h1>
    : <div>
        {props.newDucksAvailable ? <NewDucksAvailable handleClick={props.resetNewDucksAvailable}/> : null }
        {props.duckIds.length === 0 
          ? <p className={header}>This is unfortunate <br/> It appears there are no ducks yet</p>
          : null}
        {props.duckIds.map((id) => {
          return <DuckContainer duckId={id} key={id} />
        })}
        {props.error ? <p className={errorMsg}>{props.error}</p> : null}
      </div>
}

Feed.propTypes = {
  duckIds: array.isRequired,
  error: string.isRequired,
  isFetching: bool.isRequired,
  newDucksAvailable: bool.isRequired,
  resetNewDucksAvailable: func.isRequired, 
}

export default Feed
