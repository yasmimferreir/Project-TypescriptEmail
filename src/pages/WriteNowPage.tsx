import { Button, DateTimePicker, Nav, RichInput } from 'components';
import { FormProvider, useForm } from 'react-hook-form';

export function WriteNowPage() {
  const FormMethods = useForm();
  const { register, handleSubmit } = FormMethods;

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

            <label htmlFor="destinationAddress">E-mail</label>
            <input {...register('destinationAddress')} type="text" />

            <label htmlFor="dueData">Data</label>
            <DateTimePicker name="dueDate"/>

            <label htmlFor="subject">Assunto</label>
            <input {...register('subject')} type="text" />

            <label htmlFor="body">Mensagem</label>
            <RichInput name="body"/>

            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
