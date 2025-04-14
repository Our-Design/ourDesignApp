import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import {fetchAllLeadsAPI, fetchMyLeadsAPI} from '../../api/leads';
import {setError, setLoading} from './uiSlice';
import {RootState} from '..';

export interface Lead {
  _id: string;
  customerName: string;
  customerMobile: string;
  address?: string;
  budget?: number;
  metaData?: Record<string, any>;
  status: 'new' | 'sold';
  isVerified: boolean;
  assignedTo?: string | null;
  createdAt: string;
  updatedAt: string;

  // New fields
  propertyType?: string;
  description?: string;
  propertySize?: number;
}

interface LeadFilters {
  search: string;
  sortBy: 'none' | 'price-asc' | 'price-desc';
  priceMin: number;
  priceMax: number;
  status: string[];
}

interface LeadsState {
  leads: Lead[];
  myLeads: Lead[];
  selectedLead: Lead | null;
  filters: LeadFilters;
}

export const defaultFilters: LeadFilters = {
  search: '',
  sortBy: 'none',
  priceMin: 0,
  priceMax: Infinity,
  status: ['new', 'sold'],
};

const initialState: LeadsState = {
  leads: [],
  myLeads: [],
  selectedLead: null,
  filters: defaultFilters,
};

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
    setFilters(state, action: PayloadAction<Partial<LeadFilters>>) {
      state.filters = {...state.filters, ...action.payload};
    },
    resetFilters(state) {
      state.filters = defaultFilters;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllLeads.fulfilled, (state, action) => {
      state.leads = action.payload;
    });
  },
});

export const {setSelectedLead, setFilters, resetFilters} = leadsSlice.actions;

// ✅ Memoized selector
export const selectFilteredLeads = createSelector(
  (state: RootState) => state.leads.leads,
  (state: RootState) => state.leads.filters,
  (leads, filters) => {
    return leads
      .filter(lead =>
        lead.customerName?.toLowerCase().includes(filters.search.toLowerCase()),
      )
      .filter(lead => {
        const budget = lead.budget ?? 0; // fallback to 0
        return (
          budget >= filters.priceMin &&
          budget <= filters.priceMax &&
          filters.status.includes(lead.status)
        );
      })
      .sort((a, b) => {
        const budgetA = a.budget ?? 0;
        const budgetB = b.budget ?? 0;

        if (filters.sortBy === 'price-asc') {
          return budgetA - budgetB;
        }
        if (filters.sortBy === 'price-desc') {
          return budgetB - budgetA;
        }
        return 0;
      });
  },
);

export default leadsSlice.reducer;
