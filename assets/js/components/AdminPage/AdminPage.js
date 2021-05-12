import { Container, Divider, Grid } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { AdminTaskBar } from '..'
import { CreateProductForm } from '..'

const AdminPage = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		axios.get('/api/category/read/all/')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err)); 
	}, [])

	return (
		<>
			<AdminTaskBar/>
			<Container maxWidth={false}>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={12}/>
					
					<Grid item xs={12} md={6} lg={4}>
						<CreateProductForm categories={categories}/>
					</Grid>

					<Grid item xs={12} md={6} lg={4}>
					</Grid>

					<Grid item xs={12} md={12} lg={4}>
					</Grid>

					<Grid item xs={12}/>
				</Grid>
				<Divider variant="middle"/>
			</Container>
		</>
	)
}

export default AdminPage
