export function setFormErrors(
  error: unknown,
  setErrors: (errors: object) => void
): void {
  if (typeof error !== 'object' ||
    error === null ||
    !('status' in error) ||
    typeof error.status !== 'number' ||
    error.status !== 400 ||
    !('data' in error) ||
    typeof error.data !== 'object' ||
    error.data === null
  ) { throw error; }

  setErrors(error.data);
}
