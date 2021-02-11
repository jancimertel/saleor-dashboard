/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { OrderLineCreateInput, OrderErrorCode, OrderDiscountType, DiscountValueTypeEnum, OrderEventsEmailsEnum, OrderEventsEnum, FulfillmentStatus, PaymentChargeStatusEnum, OrderStatus, OrderAction, JobStatusEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderLinesAdd
// ====================================================

export interface OrderLinesAdd_draftOrderLinesCreate_errors {
  __typename: "OrderError";
  code: OrderErrorCode;
  field: string | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderLinesAdd_draftOrderLinesCreate_order_billingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_discounts_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_discounts {
  __typename: "OrderDiscount";
  id: string;
  type: OrderDiscountType;
  calculationMode: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderLinesAdd_draftOrderLinesCreate_order_discounts_amount;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_events_relatedOrder {
  __typename: "Order";
  id: string;
  number: string | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_events_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_events_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  productName: string;
  variantName: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_events_lines {
  __typename: "OrderEventOrderLineObject";
  quantity: number | null;
  orderLine: OrderLinesAdd_draftOrderLinesCreate_order_events_lines_orderLine | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_events {
  __typename: "OrderEvent";
  id: string;
  amount: number | null;
  shippingCostsIncluded: boolean | null;
  date: any | null;
  email: string | null;
  emailType: OrderEventsEmailsEnum | null;
  invoiceNumber: string | null;
  relatedOrder: OrderLinesAdd_draftOrderLinesCreate_order_events_relatedOrder | null;
  message: string | null;
  quantity: number | null;
  transactionReference: string | null;
  type: OrderEventsEnum | null;
  user: OrderLinesAdd_draftOrderLinesCreate_order_events_user | null;
  lines: (OrderLinesAdd_draftOrderLinesCreate_order_events_lines | null)[] | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross;
  net: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice_gross;
  net: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice_net;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitDiscount: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_undiscountedUnitPrice;
  unitPrice: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_unitPrice;
  thumbnail: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine_thumbnail | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  orderLine: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines_orderLine | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_warehouse {
  __typename: "Warehouse";
  id: string;
  name: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_fulfillments {
  __typename: "Fulfillment";
  id: string;
  lines: (OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  warehouse: OrderLinesAdd_draftOrderLinesCreate_order_fulfillments_warehouse | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice_gross;
  net: OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice_net;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice_gross;
  net: OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice_net;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_lines {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderLinesAdd_draftOrderLinesCreate_order_lines_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitDiscount: OrderLinesAdd_draftOrderLinesCreate_order_lines_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderLinesAdd_draftOrderLinesCreate_order_lines_undiscountedUnitPrice;
  unitPrice: OrderLinesAdd_draftOrderLinesCreate_order_lines_unitPrice;
  thumbnail: OrderLinesAdd_draftOrderLinesCreate_order_lines_thumbnail | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderLinesAdd_draftOrderLinesCreate_order_shippingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_shippingPrice {
  __typename: "TaxedMoney";
  gross: OrderLinesAdd_draftOrderLinesCreate_order_shippingPrice_gross;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_subtotal {
  __typename: "TaxedMoney";
  gross: OrderLinesAdd_draftOrderLinesCreate_order_subtotal_gross;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_total_tax {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_total {
  __typename: "TaxedMoney";
  gross: OrderLinesAdd_draftOrderLinesCreate_order_total_gross;
  tax: OrderLinesAdd_draftOrderLinesCreate_order_total_tax;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_totalAuthorized {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_totalCaptured {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal {
  __typename: "TaxedMoney";
  net: OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal_net;
  gross: OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal_gross;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_availableShippingMethods_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: OrderLinesAdd_draftOrderLinesCreate_order_availableShippingMethods_price | null;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_discount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_invoices {
  __typename: "Invoice";
  id: string;
  number: string | null;
  createdAt: any;
  url: string | null;
  status: JobStatusEnum;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order_channel {
  __typename: "Channel";
  isActive: boolean;
  id: string;
  name: string;
  currencyCode: string;
}

export interface OrderLinesAdd_draftOrderLinesCreate_order {
  __typename: "Order";
  id: string;
  metadata: (OrderLinesAdd_draftOrderLinesCreate_order_metadata | null)[];
  privateMetadata: (OrderLinesAdd_draftOrderLinesCreate_order_privateMetadata | null)[];
  billingAddress: OrderLinesAdd_draftOrderLinesCreate_order_billingAddress | null;
  canFinalize: boolean;
  created: any;
  customerNote: string;
  discounts: OrderLinesAdd_draftOrderLinesCreate_order_discounts[] | null;
  events: (OrderLinesAdd_draftOrderLinesCreate_order_events | null)[] | null;
  fulfillments: (OrderLinesAdd_draftOrderLinesCreate_order_fulfillments | null)[];
  lines: (OrderLinesAdd_draftOrderLinesCreate_order_lines | null)[];
  number: string | null;
  paymentStatus: PaymentChargeStatusEnum;
  shippingAddress: OrderLinesAdd_draftOrderLinesCreate_order_shippingAddress | null;
  shippingMethod: OrderLinesAdd_draftOrderLinesCreate_order_shippingMethod | null;
  shippingMethodName: string | null;
  shippingPrice: OrderLinesAdd_draftOrderLinesCreate_order_shippingPrice;
  status: OrderStatus;
  subtotal: OrderLinesAdd_draftOrderLinesCreate_order_subtotal;
  total: OrderLinesAdd_draftOrderLinesCreate_order_total;
  actions: (OrderAction | null)[];
  totalAuthorized: OrderLinesAdd_draftOrderLinesCreate_order_totalAuthorized;
  totalCaptured: OrderLinesAdd_draftOrderLinesCreate_order_totalCaptured;
  undiscountedTotal: OrderLinesAdd_draftOrderLinesCreate_order_undiscountedTotal;
  user: OrderLinesAdd_draftOrderLinesCreate_order_user | null;
  userEmail: string | null;
  availableShippingMethods: (OrderLinesAdd_draftOrderLinesCreate_order_availableShippingMethods | null)[] | null;
  discount: OrderLinesAdd_draftOrderLinesCreate_order_discount | null;
  invoices: (OrderLinesAdd_draftOrderLinesCreate_order_invoices | null)[] | null;
  channel: OrderLinesAdd_draftOrderLinesCreate_order_channel;
  isPaid: boolean;
}

export interface OrderLinesAdd_draftOrderLinesCreate {
  __typename: "DraftOrderLinesCreate";
  errors: OrderLinesAdd_draftOrderLinesCreate_errors[];
  order: OrderLinesAdd_draftOrderLinesCreate_order | null;
}

export interface OrderLinesAdd {
  draftOrderLinesCreate: OrderLinesAdd_draftOrderLinesCreate | null;
}

export interface OrderLinesAddVariables {
  id: string;
  input: (OrderLineCreateInput | null)[];
}
