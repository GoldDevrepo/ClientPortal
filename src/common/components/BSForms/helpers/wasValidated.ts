import { IBSNativeFormAPI } from '@common/components/BSForms/BSNativeForm';
import { trimClassName } from '@common/core/helpers';

export interface IWasValidatedProps {
  formApi?: IBSNativeFormAPI;
  field?: string;
  className?: string;
}

export const wasValidated = ({
  formApi,
  field,
  className,
}: IWasValidatedProps): string =>
  trimClassName(`
    ${(formApi && field && `
      ${formApi.touched(field) ? 'was-validated' : 'not-validated'}
    `) || ''}
    ${className || ''}
  `);
