export function userNotCreatedError(error) {
  let allErrors = {}

  if (error.code === 11000) {
    allErrors['email'] = 'Email is taken!'
    return allErrors
  }

  if (error.message.includes('User validation failed')) {
    Object.values(error.errors).forEach(individualError => {
      allErrors[individualError.properties.path] = individualError.properties.message
    })
  }

  return allErrors
}
