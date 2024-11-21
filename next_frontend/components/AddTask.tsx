"use client";
import React, { FormEventHandler } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "@/components/modal/BaseModal";
import { useState } from "react";
import { addTodo } from "@/api/api";
import { useRouter } from "next/navigation";

function AddTask() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        await addTodo({
            id: 4,
            title: newTaskValue,
            description: "This is send from frontend",
            due_date: new Date().toISOString().split("T")[0],
            status: "Ongoing",
        });
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    };
    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary w-full"
            >
                Add new task <AiOutlinePlus size={15} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg"> Add new task</h3>
                    <div className="modal-action">
                        <input
                            value={newTaskValue}
                            onChange={(e) => setNewTaskValue(e.target.value)}
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
        </div>
    );
}

export default AddTask;
