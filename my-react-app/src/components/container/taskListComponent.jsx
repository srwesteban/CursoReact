import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/taskComponent';

const TaskListComponent = () =>{
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // const changeState =(id) => {
    //     console.log('todo: cambiar estado de una tarea')
    // }

    return(

        <div>
            <div>
                Your task:
            </div>

            <TaskComponent task={defaultTask}/>


        </div>
    );
};

export default TaskListComponent;