import React, { FC, useState } from 'react';
import { ModalWrapper } from './Modal.styled';
import {
   Button,
   Form,
   FormField,
   Message,
   Modal as UIModal,
   ModalActions,
   ModalContent,
   ModalHeader,
} from 'semantic-ui-react';

interface ModalProps {
   children?: React.ReactNode
   trigger?: React.ReactNode 
   title: string
}

interface Form {
   name: string
   description: string
}

const Modal: FC<ModalProps> = (props) => {
   const [open, setOpen] = useState<boolean>(false);

   return (
      <ModalWrapper data-testid="Modal">
         <UIModal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={props.trigger}
         >
            <ModalHeader>{props.title}</ModalHeader>
            <ModalContent>
               {props.children}
            </ModalContent>
            <ModalActions>
               <Button color='black' onClick={() => setOpen(false)}>
                  Cancel
               </Button>
            </ModalActions>
         </UIModal>
      </ModalWrapper>
   );
}

export default Modal;
