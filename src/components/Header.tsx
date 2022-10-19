import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={"/"} className="item">
        Streamy
      </Link>
      <div className='right menu'>
        <Link to="/" className='item'>
          All Streams
        </Link>
      </div>
    </div>
  )
}

export default Header;

      {/* <Link className="item" to={"/"}>
        Home
      </Link>
      <Link className="item" to={"/streams/new"}>
        Create
      </Link>
      <Link className="item" to={"/streams/delete"}>
        Delete
      </Link>
      <Link className="item" to={"/streams/edit"}>
        Edit
      </Link>
      <Link className="item" to={"/streams/show"}>
        Show
      </Link> */}