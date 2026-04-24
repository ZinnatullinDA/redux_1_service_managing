import type { RootState } from './types'
import { createSelector } from 'reselect'

export const selectServices = (state: RootState) => state.services.items
export const selectSearchTerm = (state: RootState) => state.filter.searchTerm

export const selectFilteredServices = createSelector(
  [selectServices, selectSearchTerm],
  (services, searchTerm) => {
    if (!searchTerm.trim())
      return services

    return services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  },
)

export const selectFilterStats = createSelector(
  [selectFilteredServices, selectServices],
  (filtered, all) => ({
    found: filtered.length,
    total: all.length,
  }),
)
