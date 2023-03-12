export const baseNumberHeader = {
  flex: 1,
  filter: 'agNumberColumnFilter',
  type: 'numericColumn',
}

export function createNumberHeader(field: string) {
  return {
    ...baseNumberHeader,
    field,
  }
}
export const baseTextHeader = {
  flex: 2,
  filter: 'agTextColumnFilter',
}
export function createTextHeader(field: string) {
  return {
    ...baseTextHeader,
    field,
  }
}
