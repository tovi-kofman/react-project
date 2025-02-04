import { createBrowserRouter } from "react-router"
import AppLayout from "./components/AppLayot"
import { Box, Typography } from "@mui/material"
import ListRecipes from "./components/recipes/listRecipes"
import RecipeDetail from "./components/recipes/recipeDetail"
import { Outlet } from "react-router-dom"
import RecipeForm from "./components/recipeForm"
import Home from "./components/home"
import About from "./components/about"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: 'Home',
                element: (
                    <Box
                        sx={{

                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        <Home />
                    </Box>
                ),
            },
            {
                path: 'About',
                element: (
                    <Box
                        sx={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        <About />
                    </Box>
                ),
            },
            {
                path: 'Recipes',
                element: (
                    <Box
                        sx={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        <ListRecipes /><Outlet />
                    </Box>
                ),
                children: [
                    {
                        path: ':id',
                        element: <RecipeDetail />,
                    }
                    ,
                    {
                        path: 'RecipeForm',
                        element: <RecipeForm />
                    }
                ]
            }
        ],
    }])