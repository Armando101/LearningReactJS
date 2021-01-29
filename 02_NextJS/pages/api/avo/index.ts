import { IncomingMessage, ServerResponse } from "http";
import DB from '@database';

const allAvos = async (resquest: IncomingMessage, response: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.statusCode = 200 //Ok
  response.setHeader('Content-type', 'application/json')

  response.end(JSON.stringify({
    data: allEntries,
    length,
  }));
}

// Lo que espera NextJS es una función que reciba un request y un response
// Con esto podemos hacer nuestro propio backend como en node JS
export default allAvos;