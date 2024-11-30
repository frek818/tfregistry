import React, { FC } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormField, Button } from 'semantic-ui-react';
import { NamespaceFormWrapper } from './NamespaceForm.styled';

type Inputs = {
   name: string
   description: string
}

interface NamespaceFormProps { }

const NamespaceForm: FC<NamespaceFormProps> = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


   return (
      <NamespaceFormWrapper data-testid="NamespaceForm">
         <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField>
               <label>Name</label>
               <input {...register("name", { required: true })} placeholder='Name' />
               {errors.name && <span>This field is required</span>}
            </FormField>
            <FormField>
               <label>Description</label>
               <input {...register("description", { required: true })} placeholder='Description' />
               {errors.description && <span>This field is required</span>}
            </FormField>
            <Button type='submit'>Submit</Button>
         </Form>
      </NamespaceFormWrapper>
   );
}

export default NamespaceForm;
