import { FC, useState } from 'react';
import { CreateNamespaceModalWrapper } from './CreateNamespaceModal.styled';
import {
   Button,
   Form,
   FormField,
   Message,
   Modal,
   ModalActions,
   ModalContent,
   ModalHeader,
} from 'semantic-ui-react';

interface CreateNamespaceModalProps {
   children?: React.ReactNode
}

const CreateNamespaceModal: FC<CreateNamespaceModalProps> = ({ children }) => {
   const [open, setOpen] = useState<boolean>(false);
   const [messageHidden, setMessageHidden] = useState<boolean>(true);

   const toggleMessageHidden = () => {
      setMessageHidden(!messageHidden)
   };

   return (
      <CreateNamespaceModalWrapper data-testid="CreateNamespaceModal">
         <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={children}
         >
            <ModalHeader>Create New Namespace</ModalHeader>
            <ModalContent>
               <div>
                  <Message
                     attached
                     error
                     header='Welcome to our site!'
                     content='Fill out the form below to sign-up for a new account'
                     hidden={messageHidden}
                  />
                  <button onClick={toggleMessageHidden}>toggle</button>
                  <Form className='attached fluid segment'>
                     <FormField>
                        <label>Name</label>
                        <input placeholder='Namespace Name' />
                     </FormField>
                     <FormField>
                        <label>Description</label>
                        <textarea placeholder='Description' />
                     </FormField>
                  </Form>
               </div>
            </ModalContent>
            <ModalActions>
               <Button color='black' onClick={() => setOpen(false)}>
                  Cancel
               </Button>
               <Button
                  content="Create Namespace"
                  labelPosition='right'
                  icon='checkmark'
                  onClick={() => setOpen(false)}
                  positive
               />
            </ModalActions>
         </Modal>
      </CreateNamespaceModalWrapper>
   );
}

export default CreateNamespaceModal;
