export function formatPercentage(number: number): string {
  // eslint-disable-next-line eqeqeq
  if (isNaN(number) || number == 0)
    return '0'

  return number.toFixed(3)
}
