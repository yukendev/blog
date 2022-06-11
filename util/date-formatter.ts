
// string => date(YYYY-MM-DD)
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  var y = date.getFullYear();
  var m = ('00' + (date.getMonth()+1)).slice(-2);
  var d = ('00' + date.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}