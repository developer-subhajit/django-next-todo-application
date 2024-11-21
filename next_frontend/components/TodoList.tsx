import React from "react";
import { todoItemInterface } from "@/types/todoItemInterface";
import Task from "@/components/Task";
interface TodoListProps {
    tasks: todoItemInterface[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="font-normal">
                    {tasks.map((task) => (
                        <Task key={ task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
