import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {  Recipe, addRecipe } from '../store/recipeSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useContext, useState } from 'react';
import { UserContext } from './userReducer';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    ingredients: Yup.array().of(Yup.string().required('Ingredient is required'))
        .min(1, 'At least one ingredient is required'),
    instructions: Yup.string().required('Instructions are required'),
});

const RecipeForm = () => {
const [open, setOpen] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const userDetail = useContext(UserContext);
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<Recipe>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: '', description: '', ingredients: [], instructions: '',
        },
    });
    const onSubmit = async (data: Recipe) => {
        console.log("Submitting recipe with authorId:",userDetail.user.id );
        data.authorId = userDetail.user.id; 
        await dispatch(addRecipe(data));
        handleClose();
        navigate('/Recipes')
    };
    const handleClose = () => {
        setOpen(false);
        navigate('/Recipes')
    };
    return (
        <Dialog open={open} onClose={handleClose} disableEnforceFocus disableAutoFocus>
            <DialogTitle>Add New Recipe</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                    <Controller
                        name="title" control={control}
                        render={({ field }) => (
                            <TextField
                                {...field} label="Title" variant="outlined"
                                fullWidth error={!!errors.title}
                                helperText={errors.title ? errors.title.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name="description" control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Description" variant="outlined" fullWidth error={!!errors.description}
                                helperText={errors.description ? errors.description.message : ''}
                                multiline rows={4}
                            />
                        )}
                    />
                    <Controller
                        name="ingredients" control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Ingredients (comma separated)"
                                variant="outlined" fullWidth error={!!errors.ingredients}
                                helperText={errors.ingredients ? errors.ingredients.message : ''}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    field.onChange(value.split(',').map(item => item.trim()).filter(item => item));
                                }}
                                value={field.value ? field.value.join(', ') : ''}
                            />
                        )}
                    />
                    <Controller
                        name="instructions" control={control}
                        render={({ field }) => (
                            <TextField
                                {...field} label="Instructions" variant="outlined"
                                fullWidth error={!!errors.instructions}
                                helperText={errors.instructions ? errors.instructions.message : ''}
                                multiline rows={4}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}> 
                        Submit Recipe </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary"> Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};
export default RecipeForm;