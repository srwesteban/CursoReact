import PropTypes from "prop-types";
import React  from "react";
import { Task } from "../../models/task.class";

export const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>
        Nombre: { task.name }
      </h2>
      <h3>
        Description: { task.description }
      </h3>
      <h4>
        Level: { task.levels }
      </h4>
      <h5>
        This task is: : { task.completed ? 'COMPLETED':'PENDING' }
      </h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

