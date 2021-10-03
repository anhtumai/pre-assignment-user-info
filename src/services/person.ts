import axios from "axios";
import * as _ from "lodash";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

async function getAll(): Promise<Person[]> {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function getById(id: string): Promise<Person | null> {
  const response = await axios.get(`${baseUrl}/${id}`);
  if (_.isEmpty(response.data)) return null;
  return response.data;
}

const personService = {
  getAll,
  getById,
};

export default personService;
