import TodoItem from "@/types/todoItemType";

const BACKEND_URL = process.env.BACKEND_URL;

async function createData(data: TodoItem) {
    const response = await fetch(`${BACKEND_URL}/todos`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export default createData;
