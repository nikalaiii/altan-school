import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type TypographyData = {
  header: {
    logoName: string;
    links: string[];
    title: string;
    text: string;
    button: string;
  };
  categories: {
    title: string;
  };
  collection: {
    title: string;
    text: string;
  };
  about: {
    title: string;
    text: string;
    "sub-text": string;
    button: string;
  };
  follow: {
    title: string;
    inputName: string;
    inputEmail: string;
    inputMessage: string;
    button: string;
  };
};

type TypographyState = {
  data: TypographyData;
  loading: boolean;
  error: string | null;
};

export const fetchTypography = createAsyncThunk(
  'typography/fetch',
  async () => {
    const response = await fetch('/typography.json');
    if (!response.ok) throw new Error('Failed to load typography');
    return await response.json();
  }
);

const initialState: TypographyState = {
  data: {} as TypographyData,
  loading: false,
  error: null,
};

const typographySlice = createSlice({
  name: 'typography',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypography.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTypography.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTypography.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default typographySlice.reducer;
