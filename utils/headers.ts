export function createNumberHeader(field) {
    return {
      field,
      filter: "agNumberColumnFilter",
      type: "numericColumn",
    };
  }
  export function createTextHeader(field) {
    return {
      field,
      filter: "agTextColumnFilter",
    };
  }
  