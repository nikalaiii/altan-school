import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type MediaData = {
  header: {
    plantImage: string;
  };
  categories: {
    category1: string;
    category2: string;
    category3: string;
    category4: string;
    category5: string;
  };
  collection: {
    collection1: string;
    collection2: string;
    collection3: string;
  };
  about: {
    aboutImage: string;
  };
  follow: {
    followImage: string;
  };
  navbar: {
    burgerMenu: string;
  };
};

type MediaState = {
  data: MediaData;
  loading: boolean;
  error: string | null;
};

const initialState: MediaState = {
  data: {} as MediaData,
  loading: false,
  error: null,
};

export const fetchMedia = createAsyncThunk(
  'media/fetch',
  async () => {
    const response = await fetch('/media.json');
    if (!response.ok) throw new Error('Failed to load media');
    return await response.json();
  }
);

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default mediaSlice.reducer;