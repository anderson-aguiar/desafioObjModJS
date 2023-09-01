export function shipment(order) {
  let tax = 0;
  if (order.basic < 100.0) {
    tax = 20.0;
  } else if (order.basic >= 100.0 && order.basic < 200.0) {
    tax = 12.0;
  }
  return tax;
}
