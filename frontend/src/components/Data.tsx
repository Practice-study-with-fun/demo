'use client';



export default function Data() {
    const DataFetch = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    };
    DataFetch();

  return (

    <>
    <h1>
        {
            DataFetch().then(data => {
                return data.map((user: { id: number; title: string }) => (
                    <div key={user.id}>{user.title}</div>
                ));
            })
        }

    </h1>
    </>



  )
}
