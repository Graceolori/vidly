import React from "react";

// match.params is used to get the parameter of the link
// history .push with the given .id is used inplace of the handle event

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>MovieForm {match.params.id}</h1>;
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
