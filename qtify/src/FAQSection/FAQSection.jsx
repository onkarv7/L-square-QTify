import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const useStyles = makeStyles ((theme) =>{

// })

function FAQSection({ title }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="FooterSection" id="faq_section">
      <div className="footer_title">
        <span className="FQAtitle">{title}</span>
      </div>
      <div className="accordion">
        <Accordion
          style={{ backgroundColor: "#121212", border: "1px solid #FFFFFF" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{ color: "#34C94B", width: "40px", height: "40px" }}
              />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#FFFFFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
              }}
              className="accordion_text"
            >
              Is QTify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #FFFFFF" }}
          >
            <Typography
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
              }}
              className="accordion_text"
            >
              Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ backgroundColor: "#121212", border: "1px solid #FFFFFF" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{ color: "#34C94B", width: "40px", height: "40px" }}
              />
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                width: "40%",
                flexShrink: 0,
                color: "#FFFFFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
              }}
              className="accordion_text"
            >
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "#FFFFFF" }}>
            <Typography
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
              }}
              className="accordion_text"
            >
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQSection;
