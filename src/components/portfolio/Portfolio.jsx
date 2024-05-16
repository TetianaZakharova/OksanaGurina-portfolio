import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useMediaQuery } from "@mui/material";
import experience from "../../assets/data/experience.json";
import { Kyivstar } from "./Kyivstar";
import { Vodafone } from "./Vodafone";
import { Asbis } from "./Asbis";
import { Alcatel } from "./Alcatel";
import { Batibois } from "./Batibois";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.scss";

export const Portfolio = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const mediumScreen = useMediaQuery("(max-width: 768px)");
  // const smallScreen = useMediaQuery("(max-width: 768px)");

  //(min-width: 721px) and (max-width: 840px)

  return (
    <section id="portfolio">
      <h2 className="section-title">portfolio</h2>

      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(30, 30, 30)",
            position: "sticky",
            top: "78px",
            zIndex: "2",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="Companies"
            // orientation="vertical"
            // textColor="primary"
            // indicatorColor="secondary"
            variant="scrollable"
            allowScrollButtonsMobile
            TabIndicatorProps={{ style: { background: "#e8a306" } }}
            sx={{
              ".Mui-selected": {
                color: "#e8a306 !important",
              },
              ".MuiTab-root": {
                color: "white",
                fontWeight: "600",
                fontSize: "1.3rem",
                // [smallScreen]:
                "@media (max-width: 1140px)": {
                  fontSize: "1rem",
                },
                "@media (max-width: 920px)": {
                  fontSize: ".8rem",
                },
              },
            }}
          >
            {experience.map((item) => {
              return (
                <Tab
                  label={item.name}
                  value={item.id.toString()}
                  key={item.id}
                />
              );
            })}
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{
            padding: "24px 0",
          }}
        >
          <Batibois />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            padding: "24px 0",
          }}
        >
          <Kyivstar />
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            padding: "24px 0",
          }}
        >
          <Vodafone />
        </TabPanel>
        <TabPanel
          value="4"
          sx={{
            padding: "24px 0",
          }}
        >
          <Asbis />
        </TabPanel>
        <TabPanel
          value="5"
          sx={{
            padding: "24px 0",
          }}
        >
          <Alcatel />
        </TabPanel>
      </TabContext>
    </section>
  );
};
