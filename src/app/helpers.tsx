export function getDomain(url: String): String {
  let domain = url;

  // Menghapus "https://" atau "http://"
  domain = domain.replace(/^(https?:\/\/)?/, "");

  // Menghapus bagian path setelah "/"
  domain = domain.split("/")[0];

  // Menghapus "www." jika ada
  domain = domain.replace("www.", "");

  return domain;
}

export const formateDateForDisplay = (dateString: string) => {
  return new Date(`${dateString}`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

export const config = {
  BACKEND_URL: "http://localhost:3120",
};

