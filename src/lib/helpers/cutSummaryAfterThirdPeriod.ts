const cutSummaryAfterThirdPeriod = (summary: string): string => {
  const parts = summary.split('.');
  if (parts.length > 4) {
    return parts.slice(0, 4).join('.') + '.';
  }
  return summary;
};

export default cutSummaryAfterThirdPeriod;
