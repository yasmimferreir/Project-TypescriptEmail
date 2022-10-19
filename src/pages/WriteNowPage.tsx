import { Button, DateTimePicker, Nav, RichInput } from 'components';
import { IWriteNowForm } from 'interfaces';
import { FormProvider, useForm } from 'react-hook-form';
import { WriteNowResolver } from 'validations';

export function WriteNowPage() {
  const FormMethods = useForm<IWriteNowForm>({ resolver: WriteNowResolver });
  const { formState: {errors}, register, handleSubmit } = FormMethods;

  function onSubimt(values: any) {
    console.log(
      '~ file: WhiteNowPage.tsx ~ line 9 ~ onSubmit ~ values',
      values
    );
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever agora</h1>

        <FormProvider {...FormMethods}>
          <form className="form" onSubmit={handleSubmit(onSubimt)}>
            <label htmlFor="destinationName">Nome completo</label>
            <input {...register('destinationName')} type="text" />

            {errors?.destinationName?.message && ( 
            <p className="error-text">{errors?.destinationName?.message}</p>
            )}


            <label htmlFor="destinationAddress">E-mail</label>
            <input {...register('destinationAddress')} type="email" />
            {errors?.destinationAddress?.message && ( 
            <p className="error-text">{errors?.destinationAddress?.message}</p>
            )}

            <label htmlFor="dueData">Data</label>
            <DateTimePicker name="dueDate"/>
            {errors?.dueDate?.message && ( 
            <p className="error-text">{errors?.dueDate?.message}</p>
            )}

            <label htmlFor="subject">Assunto</label>
            <input {...register('subject')} type="text" />
            {errors?.subject?.message && ( 
            <p className="error-text">{errors?.subject?.message}</p>
            )}

            <label htmlFor="body">Mensagem</label>
            <RichInput name="body"/>
            {errors?.body?.message && ( 
            <p className="error-text">{errors?.body?.message}</p>
            )}

            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
