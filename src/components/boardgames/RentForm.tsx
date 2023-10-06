import React, { useRef } from 'react'
import MyInput from '../custom/MyInput'
import DialogCloser from '../custom/DialogCloser'
import MyButton from '../custom/MyButton'

const RentForm = () => {

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            console.log(formData)
        }
    };

    return (
        <form className=" flex flex-col" id='formTest' ref={formRef}>
            <label>Start date</label>
            <MyInput type="date" name='startDate'></MyInput>
            <label>End date</label>
            <MyInput type="date" name='endDate'></MyInput>
            <div className=" self-end flex flex-row items-center justify-center gap-4">
                <DialogCloser>
                    <label>cancel</label>
                </DialogCloser>
                <DialogCloser>
                    <MyButton label="Submit" onClick={handleSubmit} />
                </DialogCloser>
            </div>
        </form>
    )
}

export default RentForm