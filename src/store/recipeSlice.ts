import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Recipe = {
    id?: number;
    title: string;
    description: string;
    authorId?: number;
    ingredients: string[];
    instructions: string;
};

export const fetchData: any = createAsyncThunk(
    "recipes/fetch",
    async (_, thunkAPI) => {
        try {
            console.log("in async thunk");
            const response = await axios.get("http://localhost:3000/api/recipes");
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const fetchRecipeById: any = createAsyncThunk(
    'recipes/fetchRecipeById',
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
        return await response.json();
    }
);
export const addRecipe = createAsyncThunk(
    "recipes/add",
    async (recipe: Recipe, thunkAPI) => {
        try {
            console.log("Recipe authorId:", recipe.authorId)
            if (!recipe.authorId) {
                return thunkAPI.rejectWithValue("User ID is missing");
            }
            const userId = recipe.authorId
            console.log("Attempting to add recipe with authorId:", userId);

            console.log("in async thunk");
            const response = await axios.post(
                "http://localhost:3000/api/recipes",
                {
                    title: recipe.title,
                    description: recipe.description,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions,
                    authorId: userId
                },
                {
                headers: { "user-id":userId }
                }
            );
            console.log("Recipe added successfully:", response.data);
            return response.data.recipe;
        } catch (e: any) {
            console.error("Error adding recipe:", e)
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        list: [] as Recipe[], loading: true,
        selectedRecipe: null as Recipe | null,
    },
    reducers: {
        add: (state, action) => {
            state.list.push({
                id: action.payload.id,
                title: action.payload.title || "new recipe",
                description: action.payload.description || "",
                authorId: action.payload.authorId,
                ingredients: action.payload.ingredients || [],
                instructions: action.payload.instructions || "",
            });
        },
        get: (state, action) => {
            const recipe = state.list.find((r) => r.id == action.payload.id);
            if (recipe) {
                state.selectedRecipe = recipe;
                console.log("update") 
            } else {
                console.log("Recipe not found");
            }
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.list = [...action.payload];
                state.loading = false;
                state.selectedRecipe = action.payload.recipe
            })
            .addCase(fetchData.rejected, (state) => {
                console.log("failed");
                state.loading = false;
            })
            .addCase(fetchData.pending, (state) => {
                console.log("loading...");
                state.loading = true;
            })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
                console.log("Fetched recipe by ID");
                state.selectedRecipe = action.payload; 
            })
            .addCase(addRecipe.fulfilled, (state, action) => {
                console.log("Recipe added successfully");
                state.list.push(action.payload); 
                state.loading = false;
            })
            .addCase(addRecipe.rejected, (state, action) => {
                console.error("Failed to add recipe:", action.payload);
                state.loading = false;
            })
            .addCase(addRecipe.pending, (state) => {
                console.log("Adding recipe...");
                state.loading = true;
            });
    },
});
export const { add, get } = recipesSlice.actions;
export default recipesSlice;

