import React from 'react';

export const Pokemon = ({monster, onVote}) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-xs-2 col-sm-1">
        <button
          className="btn btn-default btn-sm"
          type="button"
          onClick={onVote.bind(this, monster.id)}
        ><span className="glyphicon glyphicon-collapse-up"></span> {monster.votes}
        </button>
      </div>
      <div className="col-xs-10 col-sm-11">
        <h4 className="list-group-item-heading">{monster.name}</h4>
        <p className="list-group-item-text">{monster.description}</p>
      </div>
    </div>
  </li>
);

export default Pokemon;
