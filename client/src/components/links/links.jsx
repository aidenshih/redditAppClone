import React from 'react';
import { Route, Link } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import NewContainer from '../../containers/newcontainer'

const Links = ({ state, getAllLinks, getSingleLink}) => {
  const renderLinkList = () => {
    return <LinkList state={state} getAllLinks={getAllLinks} />
    
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink state={state} getSingleLink={getSingleLink} id={id} />
    )
  }

  return (
    <div>
      <Route exact path='/links' render={renderLinkList} />
      <Route path="/links/new" component={NewContainer} />
      <Route path='/links/s/:id' render={renderSingleLink} />
    </div>
  )
}

export default Links;
