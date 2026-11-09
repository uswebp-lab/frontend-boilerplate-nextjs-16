const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
const count = new Intl.NumberFormat("en-US")

export const formatPrice = (value: number) => currency.format(value)

export const formatCount = (value: number) => count.format(value)
