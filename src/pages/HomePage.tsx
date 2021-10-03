import { useState, useEffect } from "react";

import PersonCardList from "../components/PersonCardList";
import Header from "../components/Header";

import personService from "../services/person";

function HomePage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await personService.getAll();
        setPersons(result);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {isError ? (
        <div>Something went wrong ...</div>
      ) : (
        <PersonCardList persons={persons} />
      )}
    </div>
  );
}

export default HomePage;
