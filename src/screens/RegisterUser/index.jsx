"use client"

import React from 'react'
import { Box, Card, CardContent, Typography,TextField  } from '@mui/material'



const RegisterUser = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 605px)' }}>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '100%',
          margin: 'auto',
          maxWidth: '450px',
        }}
      >
        <CardContent>
          {/* <TextField id="txtFirstName" label="First Name" variant="standard" /> */}
          <Typography variant="h5" component="div" gutterBottom>
            Register User
          </Typography>

          


        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterUser
