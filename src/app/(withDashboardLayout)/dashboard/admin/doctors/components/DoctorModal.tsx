import { Button } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import THForms from '@/components/Forms/THForms';
import THFullScreenModal from '@/components/Shared/THModal/THFullScreenModal'


type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const DoctorModal = ({open, setOpen}: TProps) => {
    const handleFormSubmit = async (values: FieldValues) => {

    }
    return (
        <>
        <THFullScreenModal>
            {/* <THForms onSubmit={handleFormSubmit}>
                <h1>modal open</h1>
                <Button type="submit" sx={{ mt: 1 }}>
            Add
          </Button>
            </THForms> */}
            </THFullScreenModal>
        </>
    );
};

export default DoctorModal;