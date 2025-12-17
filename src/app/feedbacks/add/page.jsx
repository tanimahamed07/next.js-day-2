import FeedbackForm from '@/components/cards/form/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h2 className='text-2xl py-3'>Add Feedback</h2>
            <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default AddFeedback;