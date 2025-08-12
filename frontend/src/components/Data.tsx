
type User = {
    id: number;
    title: string;
    // Add other fields as needed
};

export default async function Data() {

    const data = await fetch("http://127.0.0.1:8000/api/users", {
        method: "GET"

    });
    if (!data.ok) {
        throw new Error("Failed to fetch data");
    }

    const result: User[] = await data.json();

    return (
        <>
        <h1 className="text-2xl font-bold text-center">Hello</h1>
            <br />
            {result.map((item: User) => (
                <h1 key={item.id} className="text-2xl font-bold text-center">
                    {item.title}
                </h1>
            ))}

        </>

    );
}
