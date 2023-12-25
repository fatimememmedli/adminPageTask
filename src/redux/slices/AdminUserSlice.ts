import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const response = await axios.get("https://usersapitaskk.onrender.com/users");
  console.log(response.data);
  return response.data;
});

export interface ApiUser {
  id: string;
  username: string;
  surname: string;
  following: [];
  email: string;
  bio: object;
  follower: [];
  blockList: [];
  stories: [];
  notifications: [];
  isPublic: boolean;
  posts: [];
}
export interface UserSlice {
  users: object[];
  error: string;
  loading: boolean;
}

const initialState: UserSlice = {
  users: [],
  error: "",
  loading: false,
};

export const AdminUserSlice = createSlice({
  name: "AdminUserSlice",
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<string>) => {
      axios.delete(
        "https://usersapitaskk.onrender.com/users/" + action.payload
      );
      state.users = state.users.filter((elem) => elem.id != action.payload);
    },
    postUser: (state, action: PayloadAction<object>) => {
      axios.post("https://usersapitaskk.onrender.com/users/", action.payload);
      state.users.push(action.payload);
    },
    sendNot: (state, action: PayloadAction<object>) => {
      console.log(state.users)
      let findUser = state.users.find((elem)=> elem.id == action.payload.id)
      console.log(findUser)
//       let arr = 
//       axios.patch("https://usersapitaskk.onrender.com/users/" + action.payload.id, {
//         let arr =  notifications.push(action.payload.title)
// notifications: arr
//       });
      
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { deleteUser, postUser,sendNot } = AdminUserSlice.actions;

export default AdminUserSlice.reducer;
