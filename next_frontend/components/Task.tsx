"use client";
import React, { FormEventHandler, useState } from "react";
import { todoItemInterface } from "@/types/todoItemInterface";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "@/components/modal/BaseModal";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api/api";
import { deleteTodo } from "@/api/api";

interface TaskProps {
    task: todoItemInterface;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
    const [modalOpenDeleted, setModalOpenDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.title);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            title: taskToEdit,
            description: "This is send from frontend",
            due_date: new Date().toISOString().split("T")[0],
            status: "Ongoing",
        });
        setModalOpenEdit(false);
        router.refresh();
    };

    const handleDeleteTask = async (id: number) => {
        await deleteTodo(id);
        setModalOpenDeleted(false);
        router.refresh();
    };
    return (
        <tr key={task.id}>
            <td>{task.id}</td>
            <td> {task.title}</td>
            <td> {task.description}</td>
            <td> {task.due_date}</td>
            <td> {task.status}</td>
            <td className="flex gap-3">
                <span>
                    <FiEdit
                        className="text-blue-500"
                        onClick={() => setModalOpenEdit(true)}
                        size={18}
                        cursor="pointer"
                    />
                    <Modal
                        modalOpen={modalOpenEdit}
                        setModalOpen={setModalOpenEdit}
                    >
                        <form onSubmit={handleSubmitEditTodo}>
                            <h3 className="font-bold text-lg"> Edit task</h3>
                            <div className="modal-action">
                                <input
                                    value={taskToEdit}
                                    onChange={(e) =>
                                        setTaskToEdit(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full w-full"
                                />
                                <button className="btn" type="submit">
                                    {" "}
                                    Submit{" "}
                                </button>
                            </div>
                        </form>
                    </Modal>
                </span>
                <span>
                    <FiTrash2
                        className="text-red-500"
                        onClick={() => setModalOpenDeleted(true)}
                        size={18}
                        cursor="pointer"
                    />
                    <Modal
                        modalOpen={modalOpenDeleted}
                        setModalOpen={setModalOpenDeleted}
                    >
                        <h3 className="text-lg">
                            Are you sure, you want to delete this task?{" "}
                        </h3>
                        <div className="modal-action">
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="btn"
                            >
                                Yes
                            </button>
                        </div>
                    </Modal>
                </span>
            </td>
        </tr>
    );
};

export default Task;
