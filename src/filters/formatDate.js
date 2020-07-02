import { format } from "date-fns";

function formatDate(val) {
  const date = new Date(val * 1000);
  console.log(date);
  return format(date, "HH:mm");
}

export default formatDate;
