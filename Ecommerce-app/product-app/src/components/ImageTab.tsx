import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';

interface ImageTabProps {
  // Define your component props here
  image:string[]
}

const ImageTab = ({image}: ImageTabProps) => {
    const [value, setValue] = useState('1');

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  return (
    <Box sx={{width:{
        xs:'90%',sm:'420px'
    },display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',overflowX:'hidden'}}>
    <TabContext value={value}>
        <TabPanel value="1">
        <img src={image[0]} />
        </TabPanel>
        <TabPanel value="2">
        <img src={image[1]} />
        </TabPanel>
        <TabPanel value="3">
        <img src={image[2]} />
        </TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label={<img src={image[0]} width={34} height={34} style={{borderRadius:'16px'}}/>} value="1" />
            <Tab label={<img src={image[1]} width={34} height={34} style={{borderRadius:'16px'}}/>} value="2" />
            <Tab label={<img src={image[2]} width={34} height={34} style={{borderRadius:'16px'}}/>} value="3" />
          </TabList>
        </Box>
        
      </TabContext>
      </Box>
  );
};

export default ImageTab;