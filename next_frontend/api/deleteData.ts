
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function deleteData(id: number) {
    const response = await fetch(`${BACKEND_URL}/todos`);
    const data = await response.json();
    return data;
}

export default deleteData;
