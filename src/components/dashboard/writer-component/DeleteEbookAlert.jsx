'use client'
import {AlertDialog, Button} from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";
const DeleteEbookAlert = ({clickHandler,children}) => {
  return (
<AlertDialog >
          <Button variant="">{children}</Button>
          <AlertDialog.Backdrop variant='blur'>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-100">
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  {/* <AlertDialog.Icon status="accent" /> */}
                     <div className='w-10 h-10 p-1 flex justify-center items-center rounded-full bg-(--color-error)/30'>  <FiTrash2 className="w-6 h-6 " /></div>
                  <AlertDialog.Heading>
             
                  </AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p>
                    Do you want to delete this ebook? This action cannot be undone.
                  </p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button slot="close" variant="tertiary" className='h-10 px-4 rounded-lg'>
                    Cancel
                  </Button>
                  <Button slot="close" onPress={clickHandler} variant='danger' className='h-10 px-4 rounded-lg'>Delete</Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>
  );
};

export default DeleteEbookAlert;