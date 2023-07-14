import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbcd_list = createAsyncThunk(
  "vbcds/api_v1_vbcd_list",
  async payload => {
    const response = await apiService.api_v1_vbcd_list(payload)
    return response.data
  }
)
export const api_v1_vbcd_create = createAsyncThunk(
  "vbcds/api_v1_vbcd_create",
  async payload => {
    const response = await apiService.api_v1_vbcd_create(payload)
    return response.data
  }
)
export const api_v1_vbcd_retrieve = createAsyncThunk(
  "vbcds/api_v1_vbcd_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbcd_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbcd_update = createAsyncThunk(
  "vbcds/api_v1_vbcd_update",
  async payload => {
    const response = await apiService.api_v1_vbcd_update(payload)
    return response.data
  }
)
export const api_v1_vbcd_partial_update = createAsyncThunk(
  "vbcds/api_v1_vbcd_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbcd_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbcd_destroy = createAsyncThunk(
  "vbcds/api_v1_vbcd_destroy",
  async payload => {
    const response = await apiService.api_v1_vbcd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbcdsSlice = createSlice({
  name: "vbcds",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vbcd_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbcd_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbcd_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vbcd_list,
  api_v1_vbcd_create,
  api_v1_vbcd_retrieve,
  api_v1_vbcd_update,
  api_v1_vbcd_partial_update,
  api_v1_vbcd_destroy,
  slice: vbcdsSlice
}
