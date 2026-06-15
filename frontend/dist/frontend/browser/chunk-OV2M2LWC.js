// src/app/core/models/admin.model.ts
var CUSTOMER_CONSENT_STATUS_LABELS = {
  ACTIVE: "Active",
  ACCEPTED: "Active",
  PENDING: "Pending",
  INVITED: "Invited",
  EXPIRING_SOON: "Expiring Soon",
  EXPIRED: "Expired",
  DECLINED: "Declined",
  WITHDRAWN: "Withdrawn"
};
function customerConsentStatusLabel(code) {
  return CUSTOMER_CONSENT_STATUS_LABELS[code] ?? code;
}
var CUSTOMER_CONSENT_RECORD_STATUS_LABELS = {
  ACCEPTED: "Accepted",
  PENDING: "Pending",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
  EXPIRING_SOON: "Expiring Soon",
  EXPIRED: "Expired"
};
function customerConsentRecordStatusLabel(code) {
  if (!code)
    return "\u2014";
  return CUSTOMER_CONSENT_RECORD_STATUS_LABELS[code] ?? code;
}

export {
  customerConsentStatusLabel,
  customerConsentRecordStatusLabel
};
//# sourceMappingURL=chunk-OV2M2LWC.js.map
