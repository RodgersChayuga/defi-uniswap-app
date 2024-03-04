// Shorten the address
export const shortenAddress = (accountAddress: any) => {
  // Extract the first 4 and lst 4 digits
  const firstFour = accountAddress?.substring(2, 7);
  const lastFour = accountAddress?.slice(-5);

  // Generate the shorthand number with three dots
  const shortenedAddress = `0x${firstFour}...${lastFour}`;

  return shortenedAddress;
};
