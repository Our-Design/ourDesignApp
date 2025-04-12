import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {fetchAllLeadsAPI, fetchMyLeadsAPI} from '../../api/leads';
import {setError, setLoading} from './uiSlice';

export interface Lead {
  _id: string;
  customerName: string;
  customerMobile: number;
  location: string;
  budget: number;
  status: string;
  isVerified: boolean;
  assignedTo: string | null;
  createdAt: string;
}

interface LeadsState {
  leads: Lead[];
  myLeads: Lead[];
  selectedLead: Lead | null;
}

const initialState: LeadsState = {
  leads: [],
  myLeads: [],
  selectedLead: null,
};

// 🔁 Fetch all leads
export const fetchAllLeads = createAsyncThunk(
  'leads/fetchAll',
  async (_, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchAllLeadsAPI();
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to fetch leads'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

// 🔁 Fetch my leads
export const fetchMyLeads = createAsyncThunk(
  'leads/fetchMine',
  async (_, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchMyLeadsAPI();
      return data;
    } catch (err: any) {
      dispatch(setError(err.message || 'Failed to fetch my leads'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setSelectedLead(state, action: PayloadAction<Lead>) {
      state.selectedLead = action.payload;
    },
    clearSelectedLead(state) {
      state.selectedLead = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllLeads.fulfilled, (state, action) => {
        state.leads = action.payload;
      })
      .addCase(fetchMyLeads.fulfilled, (state, action) => {
        state.myLeads = action.payload;
      });
  },
});

export const {setSelectedLead, clearSelectedLead} = leadsSlice.actions;
export default leadsSlice.reducer;
