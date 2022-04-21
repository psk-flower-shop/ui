function capitalize(string: string): string {
  if (!string) {
    return string;
  }

  const lowercaseString = string.toLowerCase().replace(/_/g, " ");
  return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}

export default capitalize;
