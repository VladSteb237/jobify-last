import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = (props) => {
    const { formBtn } = props;
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-block ${formBtn && 'form-btn'}`}
        >
            {isSubmitting ? 'submitting...' : 'submit'}
        </button>
    );
};
export default SubmitBtn;
