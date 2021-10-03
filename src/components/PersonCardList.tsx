import { Grid, Box } from "@mui/material";

import PersonCard from "./PersonCard";

function PersonCardList({ persons }: { persons: Person[] }) {
  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      <Grid container justifyContent="center" spacing={9} sx={{ flexGrow: 1 }}>
        {persons.map((person) => (
          <Grid item key={person.id}>
            <PersonCard person={person} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PersonCardList;
