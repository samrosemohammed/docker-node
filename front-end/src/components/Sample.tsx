import { useEffect, useState } from "react";
export const Sample = () => {
  interface PersonDetails {
    id: number;
    name: string;
  }
  const [data, setData] = useState<PersonDetails[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/");
      const result = await response.json();
      setData(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="text-center space-y-4">
          <h1 className="">From the Sample Component</h1>
          <div>
            <ul className="space-y-2">
              {data.map((person: PersonDetails) => {
                return (
                  <li key={person.id}>
                    Name : <span>{person.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
