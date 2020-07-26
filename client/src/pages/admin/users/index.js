import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';


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
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    img: {
        width: "inherit",
    },
}));

export default function UserList() {
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function LoadUsers() {
            const response = await api.get('/api/users');
            setUsers(response.data);
        }
        LoadUsers();
    }, [])

    return (
        <div className={classes.root}>
            <MenuAdmin title={'USERS'} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item sm={12}>
                            <Paper className={classes.paper}>
                                <h2>User Listing</h2>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Name</TableCell>
                                                        <TableCell align="center">Email</TableCell>
                                                        <TableCell align="center">Type</TableCell>
                                                        <TableCell align="center">Registration Date</TableCell>
                                                        <TableCell align="right">Options</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {users.map((row) => (
                                                        <TableRow key={row._id}>
                                                            <TableCell component="th" scope="row">
                                                                {row.name_user}
                                                            </TableCell>
                                                            <TableCell align="center">{row.email_user}</TableCell>
                                                            <TableCell align="center">{row.type_user === 1 ? <Chip label="Manager" color="primary" /> : <Chip label="Employee" color="secondary" />}</TableCell>
                                                            <TableCell align="center">{row.createdAt}</TableCell>
                                                            <TableCell align="right">
                                                                <ButtonGroup aria-label="outlined primary button group">
                                                                    <Button color="primary">Update</Button>
                                                                    <Button color="secondary">Delete</Button>
                                                                </ButtonGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
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
