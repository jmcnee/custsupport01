    import * as React from 'react';
    import Accordion from '@mui/material/Accordion';
    import AccordionDetails from '@mui/material/AccordionDetails';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import Typography from '@mui/material/Typography';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

    export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Calibration Viewer
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Toggle to open / close
                    
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Information on the Calibration Viewer: 
                Login with your.name@ppo.ca 
                Notes / Docs / How to's
                
            </Typography>
            
                <h3>
                    <a href={"https://d1neesbfsdu3rr.cloudfront.net/"} rel='noreferrer' target="_blank"> Launch Calibration Viewer</a>
                </h3>
                
            </AccordionDetails>
        </Accordion>



        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>PPO Insights</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Link to Tool here
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Metabase
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Link to Tool here
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Other Important data</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
    }
