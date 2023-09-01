import * as shippingService from "./shipping-service.js";

export function total(order) {
  const tax = shippingService.shipment(order);
  const discount = (order.basic * order.discount) / 100;
  return order.basic - discount + tax;
}
