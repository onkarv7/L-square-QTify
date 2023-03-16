import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
// import TabContext from "@mui/material/TabContext";
// import TabList from "@mui/material/TabList";
// import TabPanel from "@mui/material/TabPanel";
import Card from "./Card";

// import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function FilterSong({ albumData }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            style={{
              backgroundColor: "#121212",
            }}
            aria-label="lab API tabs example"
          >
            <Tab style={{ color: "#FFFFFF" }} label="All" value="1" />
            <Tab style={{ color: "#FFFFFF" }} label="Rock" value="2" />
            <Tab style={{ color: "#FFFFFF" }} label="Pop" value="3" />
            <Tab style={{ color: "#FFFFFF" }} label="Jazz" value="4" />
            <Tab style={{ color: "#FFFFFF" }} label="Blues" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Card albumData={albumData} />
        </TabPanel>
        <TabPanel value="2">
          <Card albumData={albumData} />
        </TabPanel>
        <TabPanel value="3">
          <Card albumData={albumData} />
        </TabPanel>
        <TabPanel value="4">
          <Card albumData={albumData} />
        </TabPanel>
        <TabPanel value="5">
          <Card albumData={albumData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default FilterSong;
