import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: 15,
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    img: {
        width: "inherit",
    },
    formControl: {
        width: "100%"
    },
}));

export default function RegisterUsers() {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {

        const data = {
            name_user: name,
            email_user: email,
            type_user: type,
            password_user: password
        }
        console.log(data)
    }


    return (
        <div className={classes.root}>
            <MenuAdmin title={'USERS'} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Paper className={classes.paper}>
                                <h2>User Registration</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            required
                                            id="name"
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            autoComplete="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="email"
                                            name="email"
                                            label="Email"
                                            fullWidth
                                            autoComplete="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="labelType">Type</InputLabel>
                                            <Select
                                                labelId="labelType"
                                                id="type"
                                                value={type}
                                                onChange={e => setType(e.target.value)}
                                            >
                                                <MenuItem value={1}>Manager</MenuItem>
                                                <MenuItem value={2}>Employee</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField
                                            type="password"
                                            required
                                            id="password"
                                            name="password"
                                            label="Password"
                                            fullWidth
                                            autoComplete="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Button variant="contained" onClick={handleSubmit} color="primary">
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>
                    <Box pt={4}>
                        <Footer />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
