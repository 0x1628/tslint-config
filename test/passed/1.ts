export function test(err: any): boolean {
  if (err) throw err

  if (Math.random() > 0.5) {
    return false
  }

  return true
}
