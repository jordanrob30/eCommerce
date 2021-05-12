import { makeStyles, Divider, Paper, TextField, Typography, useTheme, Grid, Button } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';
import ChipInput from 'material-ui-chip-input'
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'

import {Product} from '..'
import axios from 'axios';

function NumberFormatCustom(props) {
	const { inputRef, onChange, ...other } = props;
  
	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				})
			}}
			thousandSeparator
			isNumericString
			prefix="£"
		/>
	)
}

NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
  };

const useStyles = makeStyles(() => ({
	Paper: {
		padding: 8,
	},
	autocomplete: {
		marginTop: 8,
	},
	chips: {
		overflowX: 'none'
	},
	buttons: {
		marginLeft: 8
	}
}));

const CreateProductForm = ({categories}) => {
	const theme = useTheme();
	const classes = useStyles(theme)

	const [values, setValues] = useState({
		name: '',
		desription: '',
		buyPrice: '',
		sellPrice: '',
		category: '',
		tags: [],
		stock: '',
		imageSource: ''
	})

	const handleChange = (event) => {
		setValues({
		  	...values,
			[event.target.name]: event.target.value,
		});
	};


	const handleClear = () => {
		setValues({
			name: '',
			description: '',
			buyPrice: '',
			sellPrice: '',
			category: '',
			tags: [],
			stock: '',
			imageSource: ''
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('/api/products/create', values)
			.then()
			.catch();
		handleClear();
	}


	return (
		<Paper component='form' onSubmit={handleSubmit} className={classes.Paper}>
			<Grid container>
				<Grid item xs={12}>
					<TextField autoFocus type="text" name="name" label="Name" value={values.name} onChange={handleChange} required fullWidth/>
					<TextField type="text" name="description" label="Description" value={values.description} onChange={handleChange} required fullWidth/>
					<div/>
					<TextField 
						name="buyPrice"
						label="Buy Price"
						value={values.buyPrice}
						onChange={handleChange}
						fullWidth
						required
						InputProps={{
							inputComponent: NumberFormatCustom,
						}}
					/>
					<div/>
					<TextField 
						name="sellPrice"
						label="Sell Price"
						value={values.sellPrice}
						onChange={handleChange}
						required
						fullWidth
						InputProps={{
							inputComponent: NumberFormatCustom,
						}}
					/>
					<Autocomplete
						name="category"
						onChange={(e, data) => setValues({...values, category: data.name})}
						options={categories}
						getOptionLabel={(category) => category.name}
						className={classes.autocomplete}
						renderInput={(params) => <TextField {...params} label="Categories" variant="standard" required fullWidth/>}
					/>					
					<ChipInput name="tags" label="Tags" value={values.tags} onChange={(tags) => setValues({...values, tags: tags})} fullWidth/>	
					<TextField type="number" name="stock" label="Stock" value={values.stock} onChange={handleChange} required fullWidth/>
					<TextField type="text" name="imageSource" label="Image Source" value={values.imageSource} onChange={handleChange} required fullWidth/>
				</Grid>
				<Grid item xs={12} className={classes.autocomplete}>
					<Product product={values}/>
				</Grid>
				<Grid container justify="flex-end" className={classes.autocomplete}>
					<Button onClick={handleClear} variant="contained" color="secondary" className={classes.buttons}>Clear Product</Button>
					<Button type="submit" variant="contained" color="primary" className={classes.buttons}>Create Product</Button>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default CreateProductForm
