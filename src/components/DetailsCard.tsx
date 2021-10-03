import { Box } from "@mui/material";

import "./DetailsCard.css";

function TextItem({ field, value }: { field: string; value: string }) {
  return (
    <li>
      {field}: {value}
    </li>
  );
}

function DetailsCard({ person }: { person: Person }) {
  return (
    <Box className="box">
      <ul className="item">
        <TextItem field="name" value={person.name} />
        <TextItem field="username" value={person.username} />
        <TextItem field="email" value={person.email} />
        <TextItem field="phone" value={person.phone} />
        <TextItem field="company" value={person.company.name} />
        <TextItem field="website" value={person.website} />
        <li>
          address:
          <ul className="subitem">
            <TextItem field="street" value={person.address.street} />
            <TextItem field="suite" value={person.address.suite} />
            <TextItem field="city" value={person.address.city} />
            <TextItem field="zipcode" value={person.address.zipcode} />
          </ul>
        </li>
      </ul>
    </Box>
  );
}

export default DetailsCard;
