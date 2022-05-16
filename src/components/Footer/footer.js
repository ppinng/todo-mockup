import Box from '@mui/material/Box';
import React from 'react';
import { Container, Card } from '@mui/material';
const Footer = (props) => {
    return (

        <Container sx={{

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box
                sx={{
                    width: "804px",
                    height: "502px",
                    bgcolor: '#2F3237',
                    borderRadius: "20px"
                }}

            >

            </Box>
        </Container>

    );
}

export default Footer