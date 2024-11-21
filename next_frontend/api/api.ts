import { todoItemInterface } from "@/types/todoItemInterface";
import { todo } from "node:test";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllTodos = async (): Promise<todoItemInterface[]> => {
    const res = await fetch(`${BACKEND_URL}/todos/`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
};

export const addTodo = async (
    todo: todoItemInterface
): Promise<todoItemInterface> => {
    const res = await fetch(`${BACKEND_URL}/todos/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
};

export const editTodo = async (
    todo: todoItemInterface
): Promise<todoItemInterface> => {
    const res = await fetch(`${BACKEND_URL}/todos/${todo.id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const updatedTodo = await res.json();
    return updatedTodo;
};


export const deleteTodo = async (
    id:number
): Promise<void> => {
    const res = await fetch(`${BACKEND_URL}/todos/${id}/`, {
        method: "DELETE"
    });
};