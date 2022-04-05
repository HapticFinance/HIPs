const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')
const { promisify } = require('util')
const g = promisify(glob)

const snapshotIdRegex = /^https?:\/\/(snapshot.org).*\/([A-z0-9]{7,})$/

const commonValidationSchema = Yup.object().shape({
  file: Yup.string().required(),
  title: Yup.string().required(),
  type: Yup.string().oneOf(['Meta-Governance', 'Governance']).required(),
  proposal: Yup.string().matches(snapshotIdRegex),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  network: Yup.string()
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism'])
    .required(),
  implementor: Yup.string().nullable(),
  release: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const hipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      hip: Yup.number().required(),
      network: Yup.string().required(),
    }),
  )
  .noUnknown()
  .strict()

const hccpValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      hccp: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

;(async () => {
  try {
    const hips = await g('./content/hips/*.md')
    const hccp = await g('./content/hccp/*.md')

    // HIP
    await Promise.all(
      hips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = hipValidationSchema.cast({ file, ...attributes })
        return await hipValidationSchema.validate(castValues)
      }),
    )
    // HCCP
    await Promise.all(
      hccp.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = hccpValidationSchema.cast({ file, ...attributes })
        return await hccpValidationSchema.validate(castValues)
      }),
    )
  } catch (error) {
    console.log(error)
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
