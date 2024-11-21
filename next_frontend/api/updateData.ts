import TodoItem from "@/types/todoItemType";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function updateData(data: TodoItem) {
    const response = await fetch(`${BACKEND_URL}/todos/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export default updateData;
