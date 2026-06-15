// src/app/core/utils/channel.util.ts
function getChannels(c) {
  const result = [];
  if (c.channelEmail)
    result.push("EMAIL");
  if (c.channelSms)
    result.push("SMS");
  if (c.channelPush)
    result.push("PUSH");
  if (c.channelWhatsapp)
    result.push("WHATSAPP");
  if (c.channelRcs)
    result.push("RCS");
  return result;
}
function channelsLabel(c) {
  const labels = {
    EMAIL: "Email",
    SMS: "SMS",
    PUSH: "Push",
    WHATSAPP: "WhatsApp",
    RCS: "RCS"
  };
  return getChannels(c).map((id) => labels[id]).join(", ");
}

export {
  channelsLabel
};
//# sourceMappingURL=chunk-QPL2KT7B.js.map
