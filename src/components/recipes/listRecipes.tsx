import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../store/store";
import { useContext, useEffect } from "react";
import { fetchData } from "../../store/recipeSlice";
import { UserContext } from "../userReducer";
import {  Fab, Icon, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Recipe from "./recipe";
const ListRecipes = () => {
    const recipesList = useSelector((store: StoreType) => store.recipes.list);
    const dispatch = useDispatch<AppDispatch>();
    const userDetail = useContext(UserContext)

    useEffect(() => {
        console.log("🚀 Dispatching fetchData...");
        dispatch(fetchData())
    }, [dispatch, recipesList.length])
    return (
        <>
            <Paper 
                elevation={3}
                sx={{
                    position: "absolute",
                    right: "20px",
                    top: "80px",
                    width: "39%",
                    maxHeight: "83vh",
                    overflowY: "auto",
                    padding: "16px",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5"
                }}
            >
                <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
                    רשימת מתכונים
                </Typography>

                <List >
                    {recipesList.map((recipe, index) => (
                        <ListItem key={`${recipe.id}-${index}`} divider >
                            <Recipe id={recipe.id} title={recipe.title} description={recipe.description} />
                        </ListItem>
                    ))}
                </List>

                {userDetail.user.email && (
                    <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
                        <Link to={'RecipeForm'} style={{ textDecoration: "none" }}>
                            <Fab color="primary" aria-label="add">
                                <Icon>+</Icon>
                            </Fab>
                        </Link>
                    </Stack>
                )}
            </Paper>
        </>
    );
};
export default ListRecipes; 
