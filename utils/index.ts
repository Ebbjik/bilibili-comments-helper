export function isBilibiliOpusUrl(url: string): boolean {
  const regex =
    /^https:\/\/www\.bilibili\.com\/opus\/[\d]+(\?spm_id_from=[\d\.]+)?$/
  return regex.test(url)
}
