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
