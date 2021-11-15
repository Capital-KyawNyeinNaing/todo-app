export const FetchRequest = type => ({
  type
})

export const FetchSuccess = (type, data) => ({
  type,
  data
})

export const FetchError = (type, error) => ({
  type,
  error
})
