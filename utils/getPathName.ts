export const getPathName = (pathName: string)=>{
  if(!pathName) return ''
  if(pathName?.includes('/about')) return 'This is About Page'
  if(pathName?.includes('/contact-us')) return 'This is Contact us Page'
  if(pathName?.includes('/services')) return 'This is Services Page'
}