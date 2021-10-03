import { useState, useEffect } from "react";
import { useParams } from "react-router";

import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";

import personService from "../services/person";

function DetailsPage() {
  const id = useParams<{ id: string }>().id;
  const [person, setPerson] = useState<Person | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const result = await personService.getById(id);
        setPerson(result);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      {isError && <div>Something went wrong</div>}
      {!person && <div></div>}
      {!isError && person && <DetailsCard person={person} />}
    </div>
  );
}

export default DetailsPage;
