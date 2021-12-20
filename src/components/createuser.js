import React from 'react';
import '../app.css';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import { useState } from 'react';


export default function InfoTry() {
    const [customername,setCustomerName] = useState('');
    const [customeraddress,setCustomerAddress] = useState('');
    const [customernumber,setCustomerNumber] = useState('');
    const [customeremail,setCustomerEmail] = useState('');
    const [companyname,setCompanyName] = useState('');
    const error ={color:'red',display:'none'};


    function Submit()
        {
            if(customername!=="" &&  customeraddress!=="" && customernumber!=="" && customeremail!=="")
            {
                console.log(customername);
                console.log(companyname);
            }
            else
            {
                document.getElementById('error').style.display = 'block';
            }
        }
    return (
        
        <div className="infotry">
            <Typography gutterBottom varient="h3" align="center">
               
            </Typography>
            <Card style={{maxWidth:700,margin:"0 auto",padding:"20px 5px"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5">New Customer Detail</Typography>
                    <span id="error" style={error}>Please Fill All the Compulsory Field</span><br/><br/>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField onChange={(e)=>setCustomerName(e.target.value)} type="text" label="Customer Name" placeholder="Enter your Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField onChange={(e)=>setCustomerAddress(e.target.value)}  type="text" label="Customer Address" placeholder="Enter your Address" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setCustomerEmail(e.target.value)} type="email" label="Email" placeholder="Enter your Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setCustomerNumber(e.target.value)} type="text" label="Contact No." placeholder="Enter your Phone No." variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={(e)=>setCompanyName(e.target.value)} type="text" label="Company Name" placeholder="Enter your Company Name" variant="outlined" fullWidth  />
                        </Grid>
                        <Button onClick={Submit} variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}