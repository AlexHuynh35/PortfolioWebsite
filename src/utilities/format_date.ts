export default function formatDate(dateString: string): string {
  if (dateString == "TBD") {
    return "Finish Date TBD";
  }

  const [year, month] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}