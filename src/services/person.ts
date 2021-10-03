import axios from "axios";
import * as _ from "lodash";

require("dotenv").config();

const baseUrl = process.env.REACT_APP_BACKEND_URL as string;

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
