import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preencha o nome completo'),
  destinationAddress: yup.string().email().required('Preencha um email válido'),
  dueDate: yup.string().required('Preencha uma data'),
  subject: yup.string().required('Preencha um assunto'),
  body: yup.string().required('Preencha o conteudo'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);
