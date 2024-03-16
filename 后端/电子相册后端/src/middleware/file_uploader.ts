import fileUpload from 'express-fileupload'

export default fileUpload({
  safeFileNames: true,
  useTempFiles: true
})
