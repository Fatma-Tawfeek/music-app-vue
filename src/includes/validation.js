import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} field is required`,
          min: `The ${ctx.field} field is too short`,
          max: `The ${ctx.field} field is too long`,
          alpha_spaces: `The ${ctx.field} field may only contain alphabetical characters and spaces`,
          email: `The ${ctx.field} field must be a valid email`,
          min_value: `The ${ctx.field} field is too low `,
          max_value: `The ${ctx.field} field is too high`,
          excluded: `You are not allowed to use this value for the ${ctx.field} field`,
          password_mismatch: 'Passwords do not match',
          country_excluded: `Due to restrictions, we do not accept users from this location`,
          tos: 'You must accept the terms of service',
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  },
}
