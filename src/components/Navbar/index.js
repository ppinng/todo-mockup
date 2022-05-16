import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Stack } from '@mui/material';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Index = (props) => {
    return (

        <Box sx={{
            flexGrow: 1,

        }}>
            <AppBar sx={{
                height: "70px",
                bgcolor: '#F8F8F8'
            }}>

                <div className='navbar' style={{ height: "70px", display: 'flex', alignItems: 'center' }}>
                    <Container>
                        <Stack direction="row">
                            <Box
                                component="img"
                                sx={{
                                    height: 40,
                                    width: 40,
                                    pr: "10px"
                                }}
                                alt="icon"
                                src="https://www.img.in.th/images/2f8658524b57ed1b8c3588e3b334e5f1.png"
                            />

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', color: "black" }}>
                                Due Today, Do Tomorrow
                            </Typography>
                            <Stack direction="row" spacing={5} >
                                <Button sx={{ color: 'black', bgcolor: '#EAEAEA', minWidth: "90px", minHeight: "9px", textTransform: "none" }}>Login</Button>
                                <Button sx={{ color: 'black', bgcolor: '#EAEAEA', minWidth: "90px", minHeight: "9px", textTransform: "none" }}>Home</Button>
                            </Stack>
                        </Stack>
                    </Container>
                </div>

            </AppBar>
        </Box>
    );
}

export default Index;