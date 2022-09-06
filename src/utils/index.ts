export function formatSummary(summary: string, number = 200) {
  const p = document.createElement("p");
  p.innerHTML = summary;
  let text = p.textContent || p.innerText || "";
  if (text.length > 50) {
    text = text.slice(0, number);
    text += " ...";
  }

  return text;
}
